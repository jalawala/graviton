// Hello World sample app.
const http = require('http');

const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});

server.listen(port, () => {
  console.log();
});
