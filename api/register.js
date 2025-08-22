const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const data = req.body;
  const filePath = path.join(__dirname, 'registrations.json');
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
}; 