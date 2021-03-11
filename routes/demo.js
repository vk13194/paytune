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


module.exports= router;