const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
fs.writeFile('example.txt'
,
'Hello, this is written to the file!'
, (err) => {
if (err) {
res.writeHead(500, { 'Content-Type': 'text/plain' });
res.end('Error writing file');
return;
}
fs.readFile('example.txt'
,
'utf8'
, (err, data) => {
if (err) {
res.writeHead(500, { 'Content-Type': 'text/plain' });
res.end('Error reading file');
return;
}
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end(`File content: ${data}`);
});
});
});

server.listen(3000, () => {
console.log('Server running at http://localhost:3000/');

})
