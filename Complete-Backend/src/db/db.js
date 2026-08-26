const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8"]);

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://aryanvisualize_db_user:hioinvhAFa6lSdrS@complete-backend.y369j13.mongodb.net/backend"
    );

    console.log("Connected to DB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

module.exports = connectDB;