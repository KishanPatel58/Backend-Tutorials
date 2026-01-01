const express = require('express')
const app = express();
const userModel = require('./usermodel.js')

app.get("/",(req,res)=>{
    res.send("hey")
})
app.get("/create",async (req,res)=>{
    let createduser = await userModel.create({
        name: "kishan",
        email: "kishan@gmail.com",
        username: "kishan145"
    })
    res.send(createduser)
})

app.listen(3000,(req,res)=>{
    console.log("Server is Running....")
})