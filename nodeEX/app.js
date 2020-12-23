/* const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const joi = require('joi') // user vadiation on backend

const app = express()
app.use(express.static(path.join(__dirname,'static')))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','form.html'))
})

app.post('/',(req,res)=>{
    const schema = joi.object({
        username : joi.string().min(5).required(),
        email : joi.string().trim().email().required(),// email field must be string
        password : joi.string().min(5).required(),
    })

    const validation = schema.validate(req.body)
    
})

app.listen(3000)
 */

const joi = require('joi')
const arrayString = ['banana','bacon','cheese']
const arrayObjects = [{example: 'example1'},{example: 'example2'}]

const userInput = {personalInfo : {
    streetAddress : '123987987',
    city : 'ladlfdf',
    state : 'f1'

},
    preference : arrayString
}

const personalInfoSchema = joi.object().keys({
    streetAddress : joi.string().trim().required(),
    city : joi.string().trim().required(),
    state : joi.string().trim().length(3).required(),
})

const preSchema = joi.array().items(joi.string())

const schema = joi.object().keys({
    personalInfo : personalInfoSchema,
    preference : preSchema
})

