import express from "express";
const app = express();
const port = 3000;

app.use(function logger(req, res, next){
    console.log(req.method);
    console.log(req.url);
    next();
});

app.get("/", (req, res)=>{
    res.send("Home page");
});

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`)
})