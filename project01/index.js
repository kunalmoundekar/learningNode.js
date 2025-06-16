const express = require('express')
const users = require('./MOCK_DATA.json')

const app = express()

const PORT = 4000

app.listen(PORT ,()=>{
    console.log("Hello world")
})

app.get('/users',(req,res)=>{
    return res.json(users)
})

app.get('/',(req,res)=>{
    res.send("Welcome to my Express server!")
})


