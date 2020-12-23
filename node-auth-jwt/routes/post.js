const router = require('express').Router();
const verify = require('../verifyToken');
const SomeUser = require('../models/User')

router.get('/',verify ,(req, res) => {
  res.json({ posts: { title: 'my test post', description: 'randon data token' } })
})

router.get('/name',verify, async (req,res) => {
  //const user = SomeUser.findById(req.username._id)
  //console.log(req.username._id)
  const user = await SomeUser.findById(req.username._id)
  //res.json(req.username._id)
  res.json(user.username)
})

module.exports = router;