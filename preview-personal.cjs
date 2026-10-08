const http = require('http');
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, 'personal-site', 'dist');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const value = match[1];
  if (!value.startsWith('#') && !/^(https?:|mailto:)/.test(value) && !fs.existsSync(path.join(root, decodeURIComponent(value.split('?')[0])))) throw Error('Missing asset: ' + value);
}
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.jpg':'image/jpeg','.svg':'image/svg+xml'};
http.createServer((req,res) => {
  const file = path.resolve(root, '.' + decodeURIComponent(req.url === '/' ? '/index.html' : req.url.split('?')[0]));
  if (!file.startsWith(root + path.sep)) {res.writeHead(403); return res.end();}
  fs.readFile(file, (error, data) => {res.writeHead(error ? 404 : 200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream'});res.end(error ? 'Not found' : data);});
}).listen(4173, '127.0.0.1', () => console.log('Assets verified. Local URL: http://127.0.0.1:4173'));
