require("dotenv").config()
const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("<h1>Hello Dear!</h1>")
})

app.get("/about", (req, res) => {
    res.send("This is about page!")
})

app.listen(process.env.PORT, () => {
    console.log(`Currently running on ${process.env.PORT}`)
})