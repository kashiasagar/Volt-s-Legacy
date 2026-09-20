try {
  require('dotenv').config();
} catch (e) {
  // dotenv is optional in production
}

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from root directory
app.use(express.static(path.join(__dirname)));

// Fallback all routes to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Volt's Legacy Server running on port ${PORT}`);
});
