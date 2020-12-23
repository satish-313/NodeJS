const http = require('http');
const fs = require('fs');

/* http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/index.html');
    // header file tell the client (browser) what type of data is responce
    res.writeHead(200,{'Content-type': 'text/html'}); // 200 http status code 200 (its ok)
    readStream.pipe(res); // res objects has writeble steam function inbuit
}).listen(3000) */

/* // for json type
http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/input.json');
    res.writeHead(200,{'Content-type': 'application/json'});
    readStream.pipe(res); 
}).listen(3000) */

// for image
http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/mina.jpg');
    res.writeHead(200,{'Content-type': 'image/png'});
    readStream.pipe(res); 
}).listen(3000)