const express = require('express');
const app = express();

app.use(function(req, res, next){
    console.log("Middleware is running");
    next();     //Next means I am forwarding the request
});

app.use(function(req, res, next){
    console.log("middleware is running again");
    next();
})

app.get("/", function(req, res){
    res.send("Aryan is a Champion");
})


app.get("/about", function(req, res){
    res.send("Hellow world")
})

app.listen(3000, ()=>{
    console.log("Server is running on 'http://localHost:3000'")
})