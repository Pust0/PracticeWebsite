const route = require('express').Router()
const path = require('path')
const passport = require('../passport')
const Users = require('../db').Users

route.get('/login',(req,res)=>{
    res.sendFile('login.html',{            //Dont use res.render as it renders a view and sends the rendered HTML string to the client
        root: path.join(__dirname, '../public')
    })
})
route.get('/signup',(req,res)=>{
    res.sendFile('index.html',{
        root: path.join(__dirname, '../public')
    })
})

route.post('/login', passport.authenticate('local',{
    failureRedirect: '/login',
    successRedirect: '/private'
}))

route.post('/signup', (req,res)=>{
    Users.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }).then((createdUser)=>{
        res.redirect('/login')
    })
})

exports = module.exports = {route}   //WE ARE HERE PASSING route AS AN OBJECT BECAUSE WE WANT TO ACCESS IT AS AN OBJECT IN server.js