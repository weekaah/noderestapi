'use strict';

const http     = require('http'),
      hostname = 'localhost',
      port     = 3001;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end('<h1>Hello world!\n</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});