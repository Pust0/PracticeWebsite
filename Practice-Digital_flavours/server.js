const express = require('express')
const session = require('express-session')
const passport = require('./passport')

const app = express();
const path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(session({
    secret: 'somesecretstring'
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/public', require('./routes/public'))
app.use('/private', require('./routes/private'))
app.use('/', require('./routes/root'))


app.use('/', express.static (path.join (__dirname, "public")))

app.listen(2424, ()=>{console.log("Server stated at http://localhost:2424")})