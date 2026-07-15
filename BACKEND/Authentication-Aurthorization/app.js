const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', function(req, res){
    res.render('index');
})

app.listen(3000);




// const cookieParser = require("cookie-parser");
// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');

// app.use(cookieParser());

// app.get("/", function(req, res){
//     let token = jwt.sign({email: "aryan@gmail.com"}, "secret");
//     res.cookie("token", token)
//     console.log(token);
//     res.send("done");

//     // //To Hash a password :
//     // bcrypt.genSalt(10, function(err, salt) {
//     //     bcrypt.hash("aryan123", salt, function(err, hash) {
//     //         // Store hash in your password DB.  
//     //         console.log(hash);
//     //     });
//     // });

//     // //To compare:
//     // bcrypt.compare("aryan123", "$2b$10$tHIafjSIo70zu5cl/xSNtu/ToiqU2wCJhZFE1P92uaGi10lybrwae").then(function(result) {
//     //     console.log(result);
//     // });

//     // res.cookie("name", "aryan");
//     // res.send("done");
// })

// // app.get("/read", function(req, res){
// //     // console.log(req.cookies);
// //     // res.send("I am on read page");
// //     //console.log(req.cookies.token)
// // })

// app.get("/read", function(req, res){
//     let data = jwt.verify(req.cookies.token, "secret");
//     console.log(data);
// })
// app.listen(3000);