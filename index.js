const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  
  if (req.url === '/') {
    res.end(JSON.stringify({ message: 'Strava Merger API' }));
  } else if (req.url === '/api/health') {
    res.end(JSON.stringify({ status: 'ok' }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT);
