import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    console.log(__dirname + '/practice1.html');
    res.sendFile(__dirname + '/practice1.html');
});

app.post("/submit", (req, res)=>{   
    console.log(req.body);
})

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})