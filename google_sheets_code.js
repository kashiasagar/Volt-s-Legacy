/**
 * ==========================================================================
 * VOLT'S LEGACY - Google Sheets Auto-Lead Sync Script
 * Target Sheet: https://docs.google.com/spreadsheets/d/1ti3zAHz62wDGIGjqFWsM6_kJlML6UWrYRJpkKbjoKk0/edit
 * ==========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1ti3zAHz62wDGIGjqFWsM6_kJlML6UWrYRJpkKbjoKk0/edit
 * 2. Click on "Extensions" (एक्सटेंशन) -> "Apps Script".
 * 3. Delete any default code inside and PASTE THIS ENTIRE FILE.
 * 4. Click "Deploy" (तैनात करें) -> "New deployment" (नया डिप्लॉयमेंट).
 * 5. Click the Gear icon ⚙️ -> Select "Web app" (वेब ऐप).
 * 6. Set Description: "Volt's Legacy Webhook"
 * 7. Set "Execute as": "Me" (your Google account)
 * 8. Set "Who has access": "Anyone" (कोई भी) [VERY IMPORTANT]
 * 9. Click "Deploy" -> Authorize access -> Copy the "Web app URL".
 * 10. Paste that Web App URL in your .env file as GOOGLE_SHEETS_WEBHOOK_URL.
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    
    // Auto-create headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp (IST)",
        "Reference ID",
        "Full Name",
        "Mobile Number",
        "City",
        "Monthly Bill (₹)",
        "Required kW",
        "Recommended kW",
        "Est. Generation",
        "Gross Cost",
        "Subsidy",
        "Net Cost",
        "Property Type",
        "System Type",
        "Message",
        "Source Page"
      ]);
      var headerRange = sheet.getRange(1, 1, 1, 16);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#fef3c7");
      headerRange.setFontColor("#78350f");
    }

    var data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    }

    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.refId || data.ref_id || "",
      data.fullName || data.full_name || "",
      data.mobileNumber || data.mobile_number || "",
      data.city || "",
      data.monthlyBill || data.monthly_bill || "",
      data.requiredKw || data.required_kw || "",
      data.recommendedKw || data.recommended_kw || "",
      data.monthlyGen || data.monthly_gen || "",
      data.grossCost || data.gross_cost || "",
      data.subsidy || "",
      data.netCost || data.net_cost || "",
      data.customerType || data.customer_type || "",
      data.systemType || data.system_type || "",
      data.message || "",
      data.sourcePage || data.source_page || ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Lead added successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Volt's Legacy Google Sheets Webhook is Active and Ready.")
    .setMimeType(ContentService.MimeType.TEXT);
}
