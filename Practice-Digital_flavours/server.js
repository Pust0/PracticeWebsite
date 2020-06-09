const express = require('express')
const app = express();
const path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', express.static (path.join (__dirname, "public")))

app.listen(2424, ()=>{console.log("Server stated at http://localhost:2424")})