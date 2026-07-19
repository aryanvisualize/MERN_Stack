//Rules of Contracts
//1. Respect the method
//2. respect the status code
//3. Use noun not verbs -> ex: user

import express from "express";
import multer from "multer";
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname);
  }
})

const upload = multer({ storage: storage })

// const upload = multer({dest : "uploads/"})

app.get("/", (req, res)=>{
    res.end("hello there");
});

//Multer is a third party middleware
//There are 3 types of data that we can upload:
//1. Single file
//2. Array of file
//3. Field data

app.post("/profile",upload.single("dp"), (req, res)=>{
    res.end("dp done")
});

app.listen(PORT, ()=>{
    console.log("Server is running");
});