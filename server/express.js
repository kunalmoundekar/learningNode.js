const express = require("express")

const app = express()

app.get('/', (req, res) => {
    return res.send("Hello From home Page")
})
 


app.get("/about",(req,res)=>{
    return res.send(`Hello ${req.query.name}  you are  ${req.query.age}`)
})










const myServer = http.createServer(app)

app.listen(7000, () => {
    console.log("server started express !")
})





