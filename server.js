const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// API endpoint for registration
app.post('/api/register', (req, res) => {
  const data = req.body;
  const filePath = path.join(__dirname, 'api', 'registrations.json');
  let registrations = [];
  try {
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      registrations = JSON.parse(fileData || '[]');
    }
    registrations.push(data);
    fs.writeFileSync(filePath, JSON.stringify(registrations, null, 2));
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save registration' });
  }
});

// Serve static files from dist (for production build)
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 