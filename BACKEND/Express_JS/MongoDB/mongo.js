import connectDB from "./dbconnection.js";
 import dns from "node:dns";
import express from "express";
// import mongoose from "mongoose";

 dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

connectDB();
// mongoose.connect(
//     "mongodb+srv://aryanvisualize:Aryan123@mern-stack.ucz8g7p.mongodb.net/",
// )
// .then(()=> console.log("Connected to mongodb"))
// .catch((error)=> console.log(error));

app.listen(3000, ()=>{
    console.log("Server running at 3000");
});
