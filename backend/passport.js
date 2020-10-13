const { token } = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./models/user.model');

const cookieExtractor = req =>{
    console.log("I dunno what this is, hello");
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"];
    }
    return token;
}

passport.use(new JwtStrategy({ jwtFromRequest : cookieExtractor, secretOrKey : "NoobCoder", logTest : console.log("test123") }, (payload,done) => {
    User.findById({_id : payload.sub},(err,user)=>{
        if(err)
            return done(err,false);
        if(user)
            return done(null,user);
        else
            return done(null,false);
    });
}));

passport.use(new LocalStrategy((username, password, done)=>{
    console.log(username + " | " + password + " | " + done);
    
    console.log(User.findOne);

    User.findOne({"username" : username},(err, user) => {
        console.log("err1: " + err);
        console.log("user1: " + user);

        if(err)
            return done(err);
        if(!user)
            return done(null,false);
        user.comparePassword(password,done);
    });
}));