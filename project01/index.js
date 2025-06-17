const express = require('express')
const users = require('./MOCK_DATA.json')

const app = express()

const PORT = 4000



app.get('/', (req, res) => {
    res.send("Welcome to my Express server!")
})



// app.get('/api/users', (req, res) => {

//     const html = `<li>
//     ${users.map((users)=> users.first_name).join("")}
//     </li>`
//     res.send(html)

// })


app.get('/users', (req, res) => {

    const html = `<ul> 
     ${users.map((users) => `<li>${users.first_name}</li>`)} </ul>`
    res.send(html)

})

//REST API

// GET /api/users/:id


app.get('/api/users', (req, res) => {
    return res.json(users)
})



app.get('/api/users/:id', (req, res) => {

    const id = Number(req.params.id)
    const user = users.find((user)=> user.id === id)
   return res.json(user)
})


app.post('/api/users',(req,res) => {
   return res.json({status : 'pending'})

})

app.patch('/api/users/:id',(req,res)=>{
    // TOOD : Edit the user with id
   return res.json({status : 'pending'})

})

app.delete('/api/users/:id',(req,res)=>{
    // TOOD : delete the user with id
   return res.json({status : 'pending'})
})










app.listen(PORT, () => {
    console.log("Hello world")
})




