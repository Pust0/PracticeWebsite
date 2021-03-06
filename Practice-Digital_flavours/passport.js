const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Users = require('./db').Users

//this defines how the user is stored in the session
passport.serializeUser(function (user, done){ //serializeUser determines which data of the user object should be stored in session
    done(null, user.username) //this user.username is stored in the session and later retrieved using deserializeUser
})

//this tells us how to recover the actual user object from the session
//first argument of deserializeUser corresponds to the key of the user object that was given to the done function ie username here
passport.deserializeUser(function (username, done){
    Users.findOne({
        username: username
    }).then((user)=>{
        if(!user){
            return done(new Error("No such user"))
        }
        return done(null, user)
    }).catch((err)=>{
        done(err)
    })
})

//The local authentication strategy authenticates users using a username and password. 
//The strategy requires a verify callback, which accepts these credentials and calls done providing a user.

passport.use(new LocalStrategy(function (username, password, done){
    Users.findOne({
        where: {
            username: username
        }
    }).then((user)=>{
        if(!user){
            return done(null, false, {message: "No such user"})
        }
        if(user.password !== password){
            return done(null, false, {messagge: "Wrong password"})
        }
        return done(null, user)
    }).catch((err)=>{
        return done(err)
    })
}))

exports = module.exports = passport