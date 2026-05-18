const express = require('express');

const app = express();

app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Strava Merger API', version: '1.0.0', status: 'ok' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Catch all 404s
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Not found', 
    path: req.path,
    method: req.method
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: err.message
  });
});

const PORT = process.env.PORT || 3000;

// Only listen if not in serverless environment
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
