const http = require('http'); // require or import http module

// for http module we use the createServer or localhost it takes two arguments 1st = request , 2nd = responce
const server = http.createServer((req,res) =>{
    //res.write('Hello world from nodejs'); // it write the text but don't send it for sending responce
    //res.end(); // end will send the responce to browser which ask for http request (req)

    // req has many property one of is url or route 
    if(req.url === '/'){ // if request come from '/' mean default port
        res.write('Hello world from nodejs');
        res.end();
    }
    else{
        res.write('using other domain');
        res.end();
    }
}); 

// tell node to which port to read request
server.listen('3000');
