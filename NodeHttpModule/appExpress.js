const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // for serving any static file in expess we use the path

const app = express(); // create an express instance name as app

// use pararameter mean we are using middleware
// first is name(public),use an express middleware to join static file __dirname is root directory
//console.log("the __dirname : " + __dirname)

app.use(express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}));
// get is an function in express which define path(django) or url route(first argument),2nd is a callback function

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','form.html'));
});

app.get('/example',(req,res)=>{
    res.send('example route for our express app')
});

// In get http request some time it take some parameter like string or value number
app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    //res.send('example with route params')
    res.send(req.params.name+' : '+req.params.age)
});

// therer is another type used in req is query string type params similar to django context dictionary
app.get('/example/query',(req,res)=>{
    console.log(req.query)
    res.send('example route for our express app')
});


app.get('/post',(req,res)=>{
    console.log('hello get')
    res.sendFile(path.join(__dirname,'static','form.html'));
})
// http post 
app.post('/post',(req,res)=>{
    console.log('hello post')
    console.log(req.body);
    res.send('successfully posted data')
});



app.listen(3000);