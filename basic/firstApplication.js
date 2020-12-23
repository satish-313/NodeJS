let http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/plain'});
    response.end('hello world\n');
}).listen(8081)
console.log('server running at http://127.0.0.1:8081/');


// write a console node firstApplication.js and run