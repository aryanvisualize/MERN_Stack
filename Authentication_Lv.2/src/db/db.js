const mongoose = require('mongoose');
const dns = require("dns");
 

dns.setServers(["8.8.8.8"]);
async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected");
    } catch (err){
        console.log("Database connection error:", err);
    }
}

module.exports = connectDB;