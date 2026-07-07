const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));    //provides the whole path    
app.set('view engine', 'ejs');      //Setup ejs as a view engine

app.get('/', function(req, res){
    // res.send("Its running")
    res.render("index");
});

app.get('/profile/:username', function(req, res){  //Now after ':' it has become dynamic
    res.send(`welcome, ${req.params.username}`);
    // res.render("index");
});

app.get('/profile/:username/:age', function(req, res, next){
    // res.send(req.params)
    res.send(`${req.params.username}, ${req.params.age}`);
})

app.listen(3000, function(){
    console.log("working")
});

// console.log(__dirname);