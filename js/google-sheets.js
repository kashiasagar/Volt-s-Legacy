/* ==========================================================================
   VOLT'S LEGACY SOLAR - Google Sheets Enquiry & Lead Integration Engine
   Connects all website quotation & survey forms directly to Google Sheets
   ========================================================================== */

(function() {
  'use strict';

  // Default / Configured Google Apps Script Web App Endpoint
  const STORAGE_KEY_WEBHOOK = 'volt_legacy_gsheet_webhook_url';
  const STORAGE_KEY_LEADS = 'volt_legacy_all_enquiries';

  // Default fallback webhook URL (Can be customized by user or configured via settings)
  const DEFAULT_WEBHOOK_URL = localStorage.getItem(STORAGE_KEY_WEBHOOK) || '';

  class GoogleSheetsLeadManager {
    constructor() {
      this.webhookUrl = localStorage.getItem(STORAGE_KEY_WEBHOOK) || DEFAULT_WEBHOOK_URL;
    }

    // Get current configured Webhook URL
    getWebhookUrl() {
      return localStorage.getItem(STORAGE_KEY_WEBHOOK) || this.webhookUrl || '';
    }

    // Set & Save new Webhook URL
    setWebhookUrl(url) {
      if (url) {
        url = url.trim();
        localStorage.setItem(STORAGE_KEY_WEBHOOK, url);
        this.webhookUrl = url;
      }
    }

    // Get all stored leads locally
    getAllLeads() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY_LEADS);
        return stored ? JSON.parse(stored) : [];
      } catch (e) {
        return [];
      }
    }

    // Save lead to local storage
    saveLeadLocally(leadData) {
      try {
        const leads = this.getAllLeads();
        leads.unshift(leadData);
        // Keep up to 500 recent leads
        if (leads.length > 500) leads.length = 500;
        localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(leads));
      } catch (e) {
        console.warn('Failed to save lead locally:', e);
      }
    }

    // Generate unique Lead Reference Number (e.g. VL-2026-582914)
    generateRefId(prefix = 'VL') {
      const year = new Date().getFullYear();
      const rand = Math.floor(100000 + Math.random() * 900000);
      return `${prefix}-${year}-${rand}`;
    }

    // Main Method: Submit Lead to Google Sheets & Local Storage
    async submitLead(rawLead) {
      const now = new Date();
      const istTime = now.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'medium'
      });

      const refId = rawLead.refId || this.generateRefId(rawLead.prefix || 'VL');

      const leadPayload = {
        timestamp: istTime,
        refId: refId,
        fullName: rawLead.fullName || '',
        mobileNumber: rawLead.mobileNumber || rawLead.phone || '',
        city: rawLead.city || '',
        monthlyBill: rawLead.monthlyBill || '',
        requiredKw: rawLead.requiredKw || '',
        recommendedKw: rawLead.recommendedKw || '',
        monthlyGen: rawLead.monthlyGen || '',
        grossCost: rawLead.grossCost || '',
        subsidy: rawLead.subsidy || '',
        netCost: rawLead.netCost || '',
        customerType: rawLead.customerType || rawLead.propertyType || 'Residential Home',
        systemType: rawLead.systemType || 'On-Grid System',
        message: rawLead.message || rawLead.address || '',
        sourcePage: rawLead.sourcePage || (document.title ? document.title.split('|')[0].trim() : 'Website Lead')
      };

      // 1. Always save locally immediately (Zero data loss guarantee)
      this.saveLeadLocally(leadPayload);

      // 2. Transmit to Google Apps Script Web App Endpoint if configured
      const activeUrl = this.getWebhookUrl();
      if (activeUrl && activeUrl.startsWith('http')) {
        try {
          await fetch(activeUrl, {
            method: 'POST',
            mode: 'no-cors', // Standard for Google Apps Script Web Apps
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(leadPayload)
          });
          console.log('Lead transmitted to Google Sheets Webhook:', refId);
        } catch (err) {
          console.warn('Google Sheets Webhook network dispatch error:', err);
        }
      } else {
        console.info('Google Sheets Webhook URL not set yet. Lead safely recorded locally in CRM storage.');
      }

      return {
        success: true,
        refId: refId,
        lead: leadPayload
      };
    }

    // Export Leads as CSV for Excel / Google Sheets
    downloadCsv() {
      const leads = this.getAllLeads();
      if (leads.length === 0) {
        alert('No enquiries recorded yet.');
        return;
      }

      const headers = [
        'Timestamp', 'Reference ID', 'Full Name', 'Mobile Number', 'City / Pincode',
        'Monthly Bill (₹)', 'Required (kW)', 'Recommended (kW)', 'Est. Generation (kWh/mo)',
        'Gross Cost (₹)', 'Subsidy (₹)', 'Net Cost (₹)', 'Property Type', 'System Type',
        'Address / Message', 'Source Page'
      ];

      const csvRows = [headers.join(',')];

      leads.forEach(l => {
        const row = [
          `"${l.timestamp || ''}"`,
          `"${l.refId || ''}"`,
          `"${(l.fullName || '').replace(/"/g, '""')}"`,
          `"${l.mobileNumber || ''}"`,
          `"${(l.city || '').replace(/"/g, '""')}"`,
          `"${l.monthlyBill || ''}"`,
          `"${l.requiredKw || ''}"`,
          `"${l.recommendedKw || ''}"`,
          `"${l.monthlyGen || ''}"`,
          `"${l.grossCost || ''}"`,
          `"${l.subsidy || ''}"`,
          `"${l.netCost || ''}"`,
          `"${(l.customerType || '').replace(/"/g, '""')}"`,
          `"${(l.systemType || '').replace(/"/g, '""')}"`,
          `"${(l.message || '').replace(/"/g, '""')}"`,
          `"${(l.sourcePage || '').replace(/"/g, '""')}"`
        ];
        csvRows.push(row.join(','));
      });

      const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Volt_Legacy_Solar_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }

  // Global Singleton Export
  window.GoogleSheetsLeadManager = new GoogleSheetsLeadManager();
})();
