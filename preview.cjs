const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
// Always serve this portfolio, even when launched from another directory.
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.png':'image/png','.woff2':'font/woff2','.pdf':'application/pdf'};
http.createServer((req,res)=>{
 res.setHeader('Cache-Control','no-store');
 let file = path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]));
 if(file===root) file=path.join(root,'index.html');
 if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
 fs.readFile(file,(error,data)=>{if(error){res.writeHead(404);res.end();return;}res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(data);});
}).listen(4174,'127.0.0.1',()=>console.log('Portfolio : http://127.0.0.1:4174'));
