require("dotenv").config();
const mongoose = require("mongoose");
const dns = require("dns");


dns.setServers(["8.8.8.8"]);

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to DB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

module.exports = connectDB;