const express = require('express');
const router = express.Router();
var passport = require("passport");
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/user.model');

const signToken = userID =>{
  return JWT.sign({
    iss : "SECRET",
    sub : userID
  }, "SECRET",{expiresIn : "1h"});
}

router.post('/register',(req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const organization = req.body.organization;

  User.findOne({username},(err,user)=>{
    if(err)
      res.status(500).json({message: {msgBody : "Error has occured", msgError: true}});
    if(user)
      res.status(400).json({message: {msgBody : "User already taken", msgError: true}});
    else{
      const newUser = new User({
        username,
        name,
        password,
        email, 
        organization 
      });
      newUser.save(err=>{
        if(err)
          res.status(500).json({message: {msgBody : "Error has occured", msgError: true}});
        else
          res.status(201).json({message: {msgBody : "Account created", msgError: false}});
      });
    }
  });
});

router.post('/login', passport.authenticate('local', {session : false }), (req, res, next)=>{
  if(req.isAuthenticated()){
    const {_id,username,email} = req.user;
    const token = signToken(_id);
    res.cookie('access_token',token,{httpOnly: true, sameSite:true}); 
    res.status(200).json({isAuthenticated : true, user : {username, email}});
  }
  else
    res.status(201).json({message: {msgBody : "Account created", msgError: false}});
});

router.get('/logout',passport.authenticate('jwt',{session : false}),(req,res)=>{
  res.clearCookie('access_token');
  res.json({user:{username : "", email : ""},success : true});
});

router.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
  const {username} = req.user;
  res.status(200).json({isAuthenticated : true, user : {username}});
});

router.get('/retrieveData',passport.authenticate('jwt',{session : false}),(req,res)=>{
  const {username, email, organization} = req.user;
  res.status(200).json({isAuthenticated : true, user : {username, email, organization}});
});

module.exports = router;