//session & cookie

const express = require('express');
const app = express();

//middleware to handle the blob (I had sent plain text -> it got conversed into json blob which is unreadable ny browser)
app.use(express.json());    //parser
app.use(express.urlencoded({extended: true}));  //parser

app.get("/", function(req, res){
    res.send("Aryan is a Champion");
})

app.get("/profile", function(req, res){
    res.send("This is a profile page");
})

app.get("/about", function(req, res, next){
    return next(new Error("Something went wrong"))
});

//Error handling middleware should be defined after all other app.use() and routes calls
app.use((err, req, res, next)=> {
    console.log(err.stack);
    res.status(500).send('Something went wrong there')
})


app.listen(3000);