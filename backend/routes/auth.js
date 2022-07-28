const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const seqKey="welcome@key"
const User = require('../models/User')
const route = express.Router();
const fetchuser=require('../middleware/fetchuser')


route.post('/createUser', [
  //Route:1 rules for validation
  body('name').isLength({ min: 3 }),
  body("email").isEmail(),
  body('password').isLength({ min: 5 })
], async (req, res) => {
  // check validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  //Create User 
  try {
     //check your is register or not
     let user= await User.findOne({email:req.body.email})
     if(user){
      return res.status(400).json("Email is already exist")
     }

      //genrate hash code password using bcryptjs


    const salt =await bcrypt.genSaltSync(10);
    const secPass=await bcrypt.hash(req.body.password,salt)

    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })

     let data={
      users:{
        id:user.id,
      }
    }
    let token=jwt.sign(data,seqKey)

    res.json(token)
  }
  catch (err) {
    //show error
    console.error(err.message);
    res.status(500).send("Error! Try Again")
  }
})
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjU4NTU1MjA2fQ.j3yrxOuXzTgkOEG8l-PDtxI4yVplxB0Lf6ESGFeQaLc

route.post('/login', [
  //Route:2 Login route
  
  body("email").isEmail(),
  body('password').isLength({ min: 5 })
], async (req, res) => {
// check validation
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
const {email,password}=req.body
try {
  const user=await User.findOne({email})
  if(!user){
    return res.status(400).json("Enter Valid email or password")
  }

  const passwordcompare=await bcrypt.compare(password,user.password)
  if(!passwordcompare){
    return res.status(400).json("Enter Valid email or password")
  }
  let data={
    users:{
      id:user.id,
    }
  }
  
  let token=jwt.sign(data,seqKey)

  res.json(token)
   
} catch (error) {
  console.error(error.message);
  res.status(500).send("Error! Try Again")
}
})



// route:3 loggedin check

route.post('/getuser',fetchuser,async (req,res)=>{
  try {
   userId=req.users.id;
    const data=await User.findById(userId).select('-password');
    console.log(req.id);
    res.send(data)
  } catch (error) {
    
  }
})

module.exports = route