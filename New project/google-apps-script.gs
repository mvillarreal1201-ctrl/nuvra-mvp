function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || "{}");
    const employeeIds = normalizeIds_(payload.employeeIds || []);
    const targetEmail = String(payload.email || "").trim();

    if (!targetEmail) {
      return jsonResponse_({
        ok: false,
        message: "Missing target email address.",
      });
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Employees");

    if (!sheet) {
      return jsonResponse_({
        ok: false,
        message: 'Create a sheet tab named "Employees" first.',
      });
    }

    const lastRow = Math.max(sheet.getLastRow(), 1);
    const values = sheet.getRange(2, 1, Math.max(lastRow - 1, 0), 1).getValues().flat();
    const existingSet = new Set(
      values
        .map(String)
        .map((value) => value.trim())
        .filter(Boolean)
    );

    const existingIds = employeeIds.filter((id) => existingSet.has(id));
    const missingIds = employeeIds.filter((id) => !existingSet.has(id));
    const appendedIds = [];

    if (missingIds.length) {
      const startRow = sheet.getLastRow() + 1;
      const newRows = missingIds.map((id) => [id]);
      sheet.getRange(startRow, 1, newRows.length, 1).setValues(newRows);
      appendedIds.push.apply(appendedIds, missingIds);
    }

    const subject = "Clock sheet employee IDs";
    const body = [
      "Clock sheet scan results",
      "",
      "Submitted at: " + (payload.submittedAt || new Date().toISOString()),
      "",
      "All scanned IDs:",
      employeeIds.join(", ") || "None",
      "",
      "Already in Google Sheets:",
      existingIds.join(", ") || "None",
      "",
      "Not found in Google Sheets:",
      missingIds.join(", ") || "None",
      "",
      "Added to Google Sheets:",
      appendedIds.join(", ") || "None",
    ].join("\n");

    MailApp.sendEmail(targetEmail, subject, body);

    return jsonResponse_({
      ok: true,
      existingIds: existingIds,
      missingIds: missingIds,
      appendedIds: appendedIds,
      message: missingIds.length
        ? "Email sent. New IDs were added to Google Sheets."
        : "Email sent. All IDs were already in Google Sheets.",
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      message: "Error: " + error.message,
    });
  }
}

function normalizeIds_(ids) {
  const seen = {};
  return ids
    .map(String)
    .map((value) => value.trim())
    .filter((value) => /^\d{4}$/.test(value))
    .filter((value) => {
      if (seen[value]) {
        return false;
      }

      seen[value] = true;
      return true;
    });
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
