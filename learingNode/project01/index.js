const express = require('express')
const users = require('./MOCK_DATA.json')

const app = express()

const PORT = 4000




app.get('/', (req, res) => {
    res.send("Welcome to my Express server!")
})






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


 
app
    .route('/api/users/:id')
    .get('/api/users/:id', (req, res) => {
        const id = Number(req.params.id)
        const user = users.find((user) => user.id === id)
        return res.json(user)
    }).patch((req, res) => {
        // TOOD : Edit the user with id
        return res.json({ status: 'Pending' })
    }).delete('/api/users/:id', (req, res) => {
        // TOOD : delete the user with id
        return res.json({ status: 'pending' })
    })


app.post('/api/users', (req, res) => {
    return res.json({ status: 'pending' })
})

app.listen(PORT, () => {
    console.log("Hello world")
})




