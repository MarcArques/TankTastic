const path = require('path');
const fs = require('fs');

// Ruta para obtener el mapa JSON
app.get('/map', (req, res) => {
  const mapPath = path.join(__dirname, 'media', 'maps', 'castle_map.json');
  fs.readFile(mapPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error llegint el mapa:', err);
      return res.status(500).json({ error: 'Error llegint el mapa' });
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});
