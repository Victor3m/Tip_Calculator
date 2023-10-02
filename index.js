import * as http from 'http';
import * as fs from 'fs';

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  fs.readFile('index.html', function(err, data) {
  if (err) throw err;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();
  })
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
