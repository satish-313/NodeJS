const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SomeUser = require('../models/User')
const router = express.Router();
const {registerionValidation,loginValidation} = require('../validation')

router.post('/register', async (req,res) => {

  // validation
  const {error} = registerionValidation(req.body)
  if(error) return res.status(404).send(error.details[0].message)

  // if user in database
  const emailExit = await SomeUser.findOne({email:req.body.email})
  const usernameExit = await SomeUser.findOne({username:req.body.username})
  if(usernameExit) return res.status(400).send('Username exited')
  if(emailExit) return res.status(400).send('Email already exits')

  //hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  
  const user = new SomeUser({
    username : req.body.username,
    email : req.body.email,
    password : hashPassword,
  });
  try {
    const saveUser = await user.save();
    res.send(saveUser.username)
  } catch (error) {
    res.status(400).send(error)
  }
});

// Login
router.post('/login', async (req,res) => {
  const {error} = loginValidation(req.body)
  if(error) return res.status(404).send(error.details[0].message)

  const usernameExit = await SomeUser.findOne({username:req.body.username})
  if(!usernameExit) return res.status(400).send('Invalid credential')

  //password
  const validPassword = await bcrypt.compare(req.body.password, usernameExit.password )
  if (!validPassword) return res.status(400).send('Invalid credential')

  //create and assing token
  const token = jwt.sign({_id: usernameExit._id}, process.env.TOKEN_SECRET)
  res.header('auth-token',token).send(token)
  
  //res.send(usernameExit.username)
})

module.exports = router;