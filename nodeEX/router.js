const express = require('express')
const path = require('path')
const app = express()
const people = require('./router/people')

app.use('/people',people)

app.listen(3000)