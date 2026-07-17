import express from "express";
const app = express();

const PORT = 3000;

app.get("/", (req, res)=>{
    res.end("hii");
});

app.use((req, res, next)=>{
    console.log("middleware 1 called");
    next();
});

app.use((req, res, next)=>{
    console.log("middleware 2 called");
    next();
});

app.post("/login", (req, res)=>{
    console.log(req.body)
})

// const express = require('express');
// const app = express();
//used to perform basic sanity check
//Helps avoid the performance overkill
// app.use(function(req, res, next){
//     console.log("Middleware is running");
//     next();     //Next means I am forwarding the request
// });

// app.use(function(req, res, next){
//     console.log("middleware is running again");
//     next();
// })

// app.get("/", function(req, res){
//     res.send("Aryan is a Champion");
// })


// app.get("/about", function(req, res){
//     res.send("Hellow world")
// })

// app.listen(3000, ()=>{
//     console.log("Server is running on 'http://localHost:3000'")
// })

app.listen(PORT, ()=>{
    console.log("Server is running");
})