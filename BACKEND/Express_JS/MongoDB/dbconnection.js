import mongoose from "mongoose";

async function connectDB(){
    await mongoose.connect(
        "mongodb+srv://aryanvisualize:Aryan123@mern-stack.ucz8g7p.mongodb.net/",
    );
    console.log("MongoDB connected...");
}

export default connectDB;