/* ==========================================================================
   VOLT'S LEGACY SOLAR - Quotation & Solar Calculator Module
   Calibrated 1:1 with Torrent Power Sheet 3 Financial & Sizing Engine
   ========================================================================== */

class QuotationEngine {
  constructor() {
    this.billSlider = document.getElementById('billRangeSlider');
    this.billTypedInput = document.getElementById('calcBillTypedInput');
    this.kwTypedInput = document.getElementById('calcKwTypedInput');
    this.billDisplay = document.getElementById('billDisplayValue');
    
    this.reqSystemSizeVal = document.getElementById('calcReqSystemSize');
    this.recSystemSizeVal = document.getElementById('calcRecSystemSize');
    this.systemSizeVal = document.getElementById('calcSystemSize');
    this.monthlySavingsVal = document.getElementById('calcMonthlySavings');
    this.govtSubsidyVal = document.getElementById('calcGovtSubsidy');
    this.lifetimeSavingsVal = document.getElementById('calcLifetimeSavings');
    this.roofSpaceVal = document.getElementById('calcRoofSpace');
    
    this.quoteForm = document.getElementById('solarQuoteForm');
    this.billInputInForm = document.getElementById('formMonthlyBill');
    this.kwInputInForm = document.getElementById('formSystemKw');

    // Official Maximum Price Dataset: Tier-1 High Yield 600W TopCon + Normal String Inverter System
    this.OFFICIAL_MAX_PRICING = [
      { panels: 4, kw: 2.40, inv: "3 kW String Inverter", struct: "3 Leg • 2 Rafter • 2 Purlin", rate: 150652, subsidy: 60000, net: 90652, units: 300 },
      { panels: 5, kw: 3.00, inv: "3 kW String Inverter", struct: "3 Leg • 2 Rafter • 3 Purlin", rate: 176364, subsidy: 78000, net: 98364, units: 375 },
      { panels: 6, kw: 3.60, inv: "3 kW String Inverter", struct: "3 Leg • 2 Rafter • 3 Purlin", rate: 201530, subsidy: 78000, net: 123530, units: 450 },
      { panels: 7, kw: 4.20, inv: "4 kW String Inverter", struct: "5 Leg • 3 Rafter • 5 Purlin", rate: 246190, subsidy: 78000, net: 168190, units: 525 },
      { panels: 8, kw: 4.80, inv: "5 kW String Inverter", struct: "5 Leg • 3 Rafter • 5 Purlin", rate: 274080, subsidy: 78000, net: 196080, units: 600 },
      { panels: 9, kw: 5.40, inv: "5 kW String Inverter", struct: "5 Leg • 3 Rafter • 5 Purlin", rate: 299246, subsidy: 78000, net: 221246, units: 675 },
      { panels: 10, kw: 6.00, inv: "5 kW String Inverter", struct: "6 Leg • 4 Rafter • 6 Purlin", rate: 358172, subsidy: 78000, net: 280172, units: 750 },
      { panels: 11, kw: 6.60, inv: "8 kW (3 PH) String Inverter", struct: "6 Leg • 4 Rafter • 6 Purlin", rate: 393140, subsidy: 78000, net: 315140, units: 825 },
      { panels: 12, kw: 7.20, inv: "8 kW String Inverter", struct: "6 Leg • 4 Rafter • 6 Purlin", rate: 418307, subsidy: 78000, net: 340307, units: 900 },
      { panels: 13, kw: 7.80, inv: "8 kW String Inverter", struct: "6 Leg • 4 Rafter • 8 Purlin", rate: 444562, subsidy: 78000, net: 366562, units: 975 },
      { panels: 14, kw: 8.40, inv: "8 kW String Inverter", struct: "6 Leg • 4 Rafter • 8 Purlin", rate: 469729, subsidy: 78000, net: 391729, units: 1050 },
      { panels: 15, kw: 9.00, inv: "10 kW String Inverter", struct: "6 Leg • 4 Rafter • 8 Purlin", rate: 499252, subsidy: 78000, net: 421252, units: 1125 },
      { panels: 16, kw: 9.60, inv: "10 kW String Inverter", struct: "6 Leg • 4 Rafter • 8 Purlin", rate: 524419, subsidy: 78000, net: 446419, units: 1200 }
    ];

    this.init();
  }

  init() {
    // 1. Slider input
    if (this.billSlider) {
      this.billSlider.addEventListener('input', (e) => {
        this.updateCalculations(parseInt(e.target.value, 10), 'slider');
      });
    }

    // 2. Typed Bill input
    if (this.billTypedInput) {
      this.billTypedInput.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        if (!isNaN(val) && val > 0) {
          this.updateCalculations(val, 'billInput');
        }
      });
    }

    // 3. Typed System Size (kW) input
    if (this.kwTypedInput) {
      this.kwTypedInput.addEventListener('input', (e) => {
        const targetKw = parseFloat(e.target.value);
        if (!isNaN(targetKw) && targetKw >= 0.5) {
          // Reverse calculate bill from kW:
          // requiredKw = ((bill / (30 * 7.80 * 4)) * 1.08) => bill = (targetKw / 1.08) * (30 * 7.80 * 4)
          const inferredBill = Math.round((targetKw / 1.08) * (30 * 7.80 * 4));
          this.updateCalculations(inferredBill, 'kwInput');
        }
      });
    }

    // 4. Form bill input sync
    if (this.billInputInForm) {
      this.billInputInForm.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        if (!isNaN(val) && val > 0) {
          this.updateCalculations(val, 'formBill');
        }
      });
    }

    // Initial calculation (₹3,500 default to match Homes page)
    this.updateCalculations(3500, 'init');

    // 5. Quote form handling
    if (this.quoteForm) {
      this.quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmit();
      });

      const inputs = this.quoteForm.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        input.addEventListener('input', () => input.classList.remove('error'));
        input.addEventListener('change', () => input.classList.remove('error'));
      });
    }
  }

  updateCalculations(billAmount, source = 'slider') {
    let bill = Math.max(500, Math.min(100000, parseFloat(billAmount) || 3500));

    // 1. Torrent Power Sheet 3 Sizing Formula
    // Required Solar System (in KW) = (Monthly_Bill / (30 * 7.80 * 4)) * 1.08
    const tariff = 7.80; // Torrent Power Standard Tariff (₹/unit)
    const requiredKw = +((bill / (30 * tariff * 4)) * 1.08).toFixed(2);
    let numPanels = Math.max(4, Math.ceil((requiredKw * 1000) / 600));
    let kw = +((numPanels * 0.60).toFixed(2));

    // Sync input controls
    if (source !== 'slider' && this.billSlider) {
      this.billSlider.value = Math.min(35000, bill);
    }
    if (source !== 'billInput' && this.billTypedInput) {
      this.billTypedInput.value = bill;
    }
    if (source !== 'kwInput' && this.kwTypedInput) {
      this.kwTypedInput.value = kw;
    }
    if (this.billDisplay) {
      this.billDisplay.textContent = '₹' + bill.toLocaleString('en-IN');
    }
    if (this.billInputInForm && document.activeElement !== this.billInputInForm) {
      this.billInputInForm.value = bill;
    }
    if (this.kwInputInForm && document.activeElement !== this.kwInputInForm) {
      this.kwInputInForm.value = `${requiredKw} kW Req. • ${kw} kW Rec. (${numPanels} Panels)`;
    }

    // Pricing tier lookup
    let tier = this.OFFICIAL_MAX_PRICING.find(t => t.panels === numPanels);
    if (!tier) {
      const baseTier = this.OFFICIAL_MAX_PRICING[this.OFFICIAL_MAX_PRICING.length - 1];
      if (numPanels > 16) {
        const extraPanels = numPanels - 16;
        tier = {
          panels: numPanels,
          kw: +(9.60 + extraPanels * 0.60).toFixed(2),
          inv: `${Math.ceil(kw)} kW String Inverter`,
          struct: `6 Leg • ${Math.ceil(numPanels/2)} Rafter`,
          rate: Math.round(baseTier.rate + (extraPanels * 25167)),
          subsidy: 78000,
          net: Math.round(baseTier.rate + (extraPanels * 25167)) - 78000,
          units: numPanels * 75
        };
      } else {
        tier = this.OFFICIAL_MAX_PRICING[0];
      }
    }

    let netInvestment = tier.net;
    let monthlyGenUnits = numPanels * 75;

    // Monthly solar generation & power savings
    const monthlySolarValue = Math.min(bill, Math.round(monthlyGenUnits * tariff));
    const residualGridBill = Math.max(450, Math.round(bill - monthlySolarValue));
    const monthlySavings = bill - residualGridBill;

    // 30-Year Compounding Net Savings (4% annual grid tariff escalation)
    const annualEscalation = 0.04;
    const factor30Yr = (Math.pow(1 + annualEscalation, 30) - 1) / annualEscalation; // 56.084937
    const normal30YrTotal = Math.round((bill * 12) * factor30Yr);
    const residual30YrTotal = Math.round((residualGridBill * 12) * factor30Yr);
    const cash30YrNetWealth = normal30YrTotal - (netInvestment + residual30YrTotal);

    // Roof space (approx 48 sq.ft per 600W Tier-1 TopCon module)
    const estRoofSpace = Math.round(numPanels * 48);

    // Render output boxes
    if (this.reqSystemSizeVal) {
      this.reqSystemSizeVal.textContent = `${requiredKw} kW`;
    }
    if (this.recSystemSizeVal) {
      this.recSystemSizeVal.textContent = `${kw} kW (${numPanels} Panels)`;
    }
    if (this.systemSizeVal) {
      this.systemSizeVal.textContent = `${requiredKw} kW Req. • ${kw} kW Rec. (${numPanels} Panels)`;
    }
    if (this.monthlySavingsVal) {
      this.monthlySavingsVal.textContent = '₹' + monthlySavings.toLocaleString('en-IN');
    }
    if (this.govtSubsidyVal) {
      this.govtSubsidyVal.textContent = '₹' + tier.subsidy.toLocaleString('en-IN') + ' Direct';
    }
    if (this.lifetimeSavingsVal) {
      this.lifetimeSavingsVal.textContent = (cash30YrNetWealth >= 10000000)
        ? '₹' + (cash30YrNetWealth / 10000000).toFixed(2) + ' Cr'
        : '₹' + (cash30YrNetWealth / 100000).toFixed(2) + ' Lakh';
    }
    if (this.roofSpaceVal) {
      this.roofSpaceVal.textContent = estRoofSpace + ' sq.ft';
    }

    // Save active state for form submission & Google Sheets
    this.activeCalculation = {
      bill: bill,
      requiredKw: `${requiredKw} kW`,
      recommendedKw: `${kw} kW (${numPanels} Panels)`,
      monthlyGenUnits: monthlyGenUnits,
      grossCost: tier.rate,
      subsidy: tier.subsidy,
      netInvestment: tier.net,
      monthlySavings: monthlySavings,
      cash30YrNetWealth: cash30YrNetWealth
    };
  }

  async handleFormSubmit() {
    if (!this.quoteForm) return;

    const formData = {
      fullName: this.quoteForm.fullName.value.trim(),
      mobileNumber: this.quoteForm.mobileNumber.value.trim(),
      email: this.quoteForm.email.value.trim(),
      city: this.quoteForm.city.value.trim(),
      customerType: this.quoteForm.customerType.value,
      systemType: this.quoteForm.systemType.value,
      monthlyBill: this.quoteForm.monthlyBill.value.trim(),
      systemKw: this.quoteForm.systemKw ? this.quoteForm.systemKw.value.trim() : '',
      message: this.quoteForm.message ? this.quoteForm.message.value.trim() : ''
    };

    let hasError = false;

    // Validate Full Name
    if (!formData.fullName || formData.fullName.length < 2) {
      this.quoteForm.fullName.classList.add('error');
      hasError = true;
    }

    // Validate Indian Mobile Number (10 digits starting with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.mobileNumber.replace(/\D/g, ''))) {
      this.quoteForm.mobileNumber.classList.add('error');
      hasError = true;
    }

    // Validate Email (Optional)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      this.quoteForm.email.classList.add('error');
      hasError = true;
    }

    // Validate City
    if (!formData.city || formData.city.length < 2) {
      this.quoteForm.city.classList.add('error');
      hasError = true;
    }

    // Validate Monthly Bill
    if (!formData.monthlyBill || isNaN(formData.monthlyBill) || Number(formData.monthlyBill) <= 0) {
      this.quoteForm.monthlyBill.classList.add('error');
      hasError = true;
    }

    if (hasError) {
      const firstError = this.quoteForm.querySelector('.form-control.error');
      if (firstError) firstError.focus();
      return;
    }

    const billNum = Number(formData.monthlyBill);
    const activeCalc = this.activeCalculation || {};
    const reqKwStr = activeCalc.requiredKw || `${+((billNum / (30 * 7.80 * 4)) * 1.08).toFixed(2)} kW`;
    const recKwStr = formData.systemKw || activeCalc.recommendedKw || '4.20 kW (7 Panels)';
    const genStr = activeCalc.monthlyGenUnits ? `${activeCalc.monthlyGenUnits} kWh/mo` : '525 kWh/mo';
    const grossStr = activeCalc.grossCost ? `₹${activeCalc.grossCost.toLocaleString('en-IN')}` : '₹2,46,190';
    const subStr = activeCalc.subsidy ? `₹${activeCalc.subsidy.toLocaleString('en-IN')}` : '₹78,000';
    const netStr = activeCalc.netInvestment ? `₹${activeCalc.netInvestment.toLocaleString('en-IN')}` : '₹1,68,190';

    // Submit lead directly to Google Sheets & Local Storage CRM
    let leadSubmission = null;
    if (window.GoogleSheetsLeadManager) {
      leadSubmission = await window.GoogleSheetsLeadManager.submitLead({
        fullName: formData.fullName,
        mobileNumber: formData.mobileNumber,
        city: formData.city,
        monthlyBill: `₹${billNum.toLocaleString('en-IN')}`,
        requiredKw: reqKwStr,
        recommendedKw: recKwStr,
        monthlyGen: genStr,
        grossCost: grossStr,
        subsidy: subStr,
        netCost: netStr,
        customerType: formData.customerType || 'Home',
        systemType: formData.systemType ? `${formData.systemType} Solar` : 'On-Grid Solar',
        message: formData.message || formData.email || 'Quotation Page Submission',
        sourcePage: 'Quotation Engine Page'
      });
    }

    const refNumber = leadSubmission && leadSubmission.refId ? leadSubmission.refId : ('VL-' + Math.floor(100000 + Math.random() * 900000));
    const waText = encodeURIComponent(`Hello VOLTS LEGACY Solar, I have requested a Solar Quotation (Ref #${refNumber}). Name: ${formData.fullName}, Mobile: +91 ${formData.mobileNumber}, City: ${formData.city}, Bill: ₹${billNum.toLocaleString('en-IN')}, System: ${recKwStr}. Please share the 3D design & proposal.`);

    const modalContent = `
      <div style="text-align: center; padding: 1rem 0;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: #dcfce7; color: #16a34a; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-size: 2rem; box-shadow: 0 4px 14px rgba(22,163,74,0.2);">
          ✓
        </div>
        <h3 style="font-size: 1.6rem; color: #071530; margin-bottom: 0.5rem; font-family: var(--font-heading);">Quotation Request Received!</h3>
        <p style="color: #475569; font-size: 0.95rem; margin-bottom: 1.5rem;">
          Thank you, <strong>${formData.fullName}</strong>. Your enquiry has been synced to our system. Our senior technical engineer will connect on <strong>+91 ${formData.mobileNumber}</strong> within 30 minutes.
        </p>
        <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; text-align: left; margin-bottom: 1.5rem; font-size: 0.9rem;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; padding-bottom: 0.5rem; border-bottom: 1px dashed #cbd5e1;">
            <span style="color: #64748b;">Enquiry Reference:</span>
            <strong style="color: #2563eb; font-family: monospace; font-size: 1rem;">#${refNumber}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="color: #64748b;">Customer Name:</span>
            <strong>${formData.fullName} (+91 ${formData.mobileNumber})</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="color: #64748b;">City / Location:</span>
            <strong>${formData.city}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="color: #64748b;">Recommended Size:</span>
            <strong style="color: #0284c7;">${recKwStr}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span style="color: #64748b;">PM Surya Ghar Subsidy:</span>
            <strong style="color: #16a34a;">${subStr} Direct Credit</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: #64748b;">Monthly Electricity Bill:</span>
            <strong style="color: #16a34a;">₹${billNum.toLocaleString('en-IN')}</strong>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <a href="https://wa.me/919998765059?text=${waText}" target="_blank" rel="noopener noreferrer" class="btn btn-solar btn-lg" style="width: 100%; justify-content: center; font-weight: 800;">
            💬 Connect Instantly on WhatsApp →
          </a>
          <button class="btn btn-secondary" style="width: 100%; justify-content: center;" onclick="window.appModal.close()">Done / Close</button>
        </div>
      </div>
    `;

    if (window.appModal) {
      window.appModal.open(modalContent);
    }

    // Reset form
    this.quoteForm.reset();
    this.updateCalculations(3500, 'reset');
  }
}

window.QuotationEngine = QuotationEngine;
