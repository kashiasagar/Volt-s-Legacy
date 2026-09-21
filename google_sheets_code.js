/**
 * ==========================================================================
 * VOLT'S LEGACY - Google Sheets Auto-Lead Sync Script
 * Target Sheet: https://docs.google.com/spreadsheets/d/1ti3zAHz62wDGIGjqFWsM6_kJlML6UWrYRJpkKbjoKk0/edit
 * ==========================================================================
 */

var TARGET_SPREADSHEET_ID = "1ti3zAHz62wDGIGjqFWsM6_kJlML6UWrYRJpkKbjoKk0";

function getSheet() {
  try {
    return SpreadsheetApp.openById(TARGET_SPREADSHEET_ID).getSheets()[0];
  } catch (err) {
    return SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  }
}

function doPost(e) {
  try {
    var sheet = getSheet();
    
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
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    var newRow = [
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
    ];

    sheet.appendRow(newRow);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      sheetName: sheet.getName(),
      totalRows: sheet.getLastRow(),
      refId: data.refId || data.ref_id
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var sheet = getSheet();
    return ContentService.createTextOutput(
      "SUCCESS: Connected to " + sheet.getParent().getName() + " | Tab: " + sheet.getName() + " | Total Rows: " + sheet.getLastRow()
    ).setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput("ERROR: " + err.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}
