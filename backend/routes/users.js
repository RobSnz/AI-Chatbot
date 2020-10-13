const express = require('express');
const router = express.Router();
var passport = require("passport");
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/user.model');

const signToken = userID =>{
  return JWT.sign({
    iss : "NoobCoder",
    sub : userID
  }, "NoobCoder",{expiresIn : "1h"});
}



router.post('/register',(req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  console.log("bananas");

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
        email
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

router.use(express.json());

let tempLoginInfo = {};

router.post("/login", function(req, res, next) {
  tempLoginInfo.username = req.body.username;
  tempLoginInfo.password = req.body.password;
  console.log(req.body);
  console.log("testaaaaaaaa");
  next();
}, passport.authenticate("local", function(err, user, info) {
  console.log("err: " + err);
  console.log("user: " + user);
  console.log("info: " + info);

  if(err) {
    console.log("some err: " + err);
    return;
  }
}));

/*
router.post('/login', passport.authenticate('local', {session : false, logTest : console.log("test456")}), (req, res, next)=>{
  console.log("WEIUOHJTRIUYERHTUIEWHN1")
  if(req.isAuthenticated()){
    const {_id,username,email} = req.user;
    const token = signToken(_id);
    res.cookie('access_token',token,{httpOnly: true, sameSite:true}); 
    res.status(200).json({isAuthenticated : true, user : {username, email}});
  }
});
*/

router.get('/logout',passport.authenticate('jwt',{session : false, logTest : console.log("test789")}),(req,res)=>{
  console.log("WEIUOHJTRIUYERHTUIEWHN2")
  res.clearCookie('access_token');
  res.json({user:{username : "", email : ""},success : true});
});

router.get('/authenticated',passport.authenticate('jwt',{session : false, logTest : console.log("test4634")}),(req,res)=>{
  console.log("WEIUOHJTRIUYERHTUIEWHN3")
  const {username, email} = req.user;
  res.status(200).json({isAuthenticated : true, user : {username, email}});
});

module.exports = router;