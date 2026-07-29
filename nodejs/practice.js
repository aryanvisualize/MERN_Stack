import express from "express";
const app = express();

app.get("/",(req, res)=>{
    res.send("Hii there");
});

app.get("/about", (req, res)=>{
    res.send("<h1>About page </h1>");
});

app.post("/register", (req, res)=>{
    res.sendStatus(201);
});

app.post("/user/aryan", (req, res)=>{
    res.sendStatus(200);
});

app.patch("/user/aryan", (req, res)=>{
    res.sendStatus(200);
});

app.delete("/user/aryan", (req, res)=>{
    res.sendStatus(200);
});

app.listen(3000, ()=>{
    console.log("Server is running at 3000");
});