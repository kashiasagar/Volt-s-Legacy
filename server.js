try {
  require('dotenv').config();
} catch (e) {
  // dotenv is optional in production
}

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Backend Proxy to Google Sheets Webhook (Bypasses all browser CORS and redirect restrictions)
app.post('/api/submit-lead', async (req, res) => {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || 'https://script.google.com/macros/s/AKfycbyAmqwA7ySPkBYzN4EeUWRPUppoFMTLPXVcFh5bk3gKWHF1SbB67ISY50cj74B7sDQz0A/exec';
  try {
    const payload = req.body || {};
    const r = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
      redirect: 'follow'
    });
    const result = await r.json().catch(() => ({ status: 'success' }));
    res.json(result);
  } catch (err) {
    console.warn('Backend proxy Google Sheet error:', err.message);
    res.status(500).json({ status: 'error', error: err.message });
  }
});

// Serve all static files from root directory
app.use(express.static(path.join(__dirname)));

// Fallback all routes to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Volt's Legacy Server running on port ${PORT}`);
});
