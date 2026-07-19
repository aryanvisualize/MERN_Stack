import express from "express";
import fs from "fs";
const app = express();

app.use(express.json());

const PORT = 3000;

let username = "aryanrastogi";
let password = "aryan123";

app.get("/", (req, res) => {
    res.end("hii");
});

// app.use((req, res, next) => {
//     console.log("middleware 1 called");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("middleware 2 called");
//     next();
// });

app.use((req, res, next) => {
    if (req.body.username === username && req.body.password === password) {
        console.log("I am done with check you can go ahead");
        next();
    } else {
        res.end("Invalid credentials");
    }
});

app.use((req, res, next)=>{
        fs.appendFile("log.txt", `\n${req.body.username} was logged in at ${Date.now()} and was accessing route ${req.url}`, (err,data)=> {
            if(err) return err;
            console.log(data);
        },
    );
    next();
})

app.post("/login", (req, res) => {
    console.log(req.body);
    res.end("login done");
});

app.post("/register", (req, res)=>{
    console.log(req.body);
    res.end("Hi from register route")
})

app.listen(PORT, () => {
    console.log("Server is running");
});