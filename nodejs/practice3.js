import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIdAuthorized = false;

app.use(bodyParser.urlencoded({extended: true}));

function passwordCheck(req, res, next){
    if(req.body && req.body.password === "12345"){
        userIdAuthorized = true;
    }
    next();
}
app.use(passwordCheck);

app.get("/",(req, res)=>{
    res.sendFile(__dirname + '/practice3.html');
});

app.post('/check', (req, res)=>{
    if(userIdAuthorized){
        res.sendFile(__dirname + "/secret.html");
    }
    else{
        res.sendFile(__dirname + "/practice3.html");
    }
});

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
});