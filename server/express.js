const express = require("express");
const app = express();


app.get('/', (req, res) => {
    return res.send(`Hello From home Page    <h1>   ${req.query.name} </h1> `);
});

app.get("/about", (req, res) => {
    return res.send(`Hello ${req.query.name}  you are  ${req.query.age}`);
});


app.listen(7000, () => {
    console.log("server started express !");
});
