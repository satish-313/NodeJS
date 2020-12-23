const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//import routers
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post')

dotenv.config();
const app = express();
const PORT = process.env.PORT;

//database
const url = process.env.db_connect
mongoose.connect(url,  {useNewUrlParser: true ,useUnifiedTopology: true })
.then(() => console.log('connect to db'))
.catch((error) => console.log(error))

//middleware
app.use(express.json());

//route middlewares
app.use('/user' , authRoute);
app.use('/posts',postRoute)

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));