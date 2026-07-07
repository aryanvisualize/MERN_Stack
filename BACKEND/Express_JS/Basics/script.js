// import express from 'express'

// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000')
// })

const express = require('express');
const app = express();

app.get("/", function(req, res){    //Route is anything after domain
    res.send( "Who is Champion");
})

app.get("/name", function(req, res){
    res.send("Aryan is a Champion");
})

app.listen(3000, ()=>{
    console.log("Server is running on 'http://localHost:3000'")
})