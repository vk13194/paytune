const express = require('express')
const router = express.Router();
const User =require('../model/User')

router.post('/user', (req, res)=>{
    const newUser = new User({
        gender:req.body.gender,
        age:req.body.age,
        city:req.body.city,
        product:req.body.product
    })
    newUser.save()
    res.json(newUser)
})

router.get('/users', async(req, res)=>{
  const users= await User.findOne({$and:[{'gender':'female'},{'age':'20'},{'city':'patna'}]})
  res.json(users)  
  //single output  example  users.product
  
})
router.get('/all',async(req, res)=>{
    const users= await User.find();
    res.json(users)
})

module.exports= router;