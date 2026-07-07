const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Aryan is a Champion");
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