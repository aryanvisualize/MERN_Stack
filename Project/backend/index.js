import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.config.js";
import authController from "./controllers/auth.controller.js";
import dns from "node:dns";

const app = express();

dns.setServers(["8.8.8.8", "1.1.1.1"]);
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const PORT = process.env.PORT || 5000;


app.get("/", (req, res)=>{
    res.send("hello there"); 
});

app.use("/api/v1/auth/", authController)
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running at http://localhost:${PORT}`);
        console.log(`api docs: http://localhost:${PORT}/api-docs`);
    });
});
