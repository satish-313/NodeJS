const express = require('express')
const bodyparser = require('body-parser')
const app = express()

app.use(bodyparser.json())
app.use('/example',(req,res,next)=>{
    console.log(req.url, req.method)
    req.banana = 'banana'
    next();
}) 

app.get('/',(req,res)=>{
    res.send('middleware')
})
app.get('/example',(req,res)=>{
    console.log(req.banana)
    res.send('middleware is running')
})
app.get('/hello',(req,res)=>{
    res.send('hello')
})
app.listen(3000)