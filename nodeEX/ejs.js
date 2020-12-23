// ejs is a template language
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();


// views engine setup
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');

// serup public folder
//app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/search/:userQuery',(req,res)=>{
    res.render('index',{data : {userQuery: req.params.userQuery,
    searchResults : ['book1','book2','book3'],
    loggedIn : true,
    username : 'satish'
}});
})

app.listen(3000)