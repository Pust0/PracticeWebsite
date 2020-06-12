const express = require('express')
const session = require('express-session')
const passport = require('./passport')

const app = express();
const path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(session({
    secret: 'somesecretstring' //this is used to encrypt the session ID
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/', express.static (path.join (__dirname, "public")))
app.use('/public',require('./routes/public')) //route doesnt specify the routes to /public and /private, you app.use them here
app.use('/private',require('./routes/private'))
app.use('/',require('./routes').route)

app.listen(2424, ()=>{console.log("Server stated at http://localhost:2424")})