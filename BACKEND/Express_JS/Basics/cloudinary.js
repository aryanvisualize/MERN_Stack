import express from "express";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import fs from "fs";


const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

cloudinary.config({
    cloud_name : "xgj9f76e",
    api_key: "883812464495194",
    api_secret: "gEmK42x08lwC5zeYJdxC4TbRubw",
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })


app.get("/", (req, res)=>{
    res.end("hello there");
});

app.post("/upload",upload.single("dp"), async (req, res)=>{
    try{
        const file = req.file;
        const result = await cloudinary.uploader.upload(file.path);
        fs.unlinkSync(file.path);
        res.send(result);
    }
    catch (error){
        if (req.file && req.file.path) fs.unlinkSync(req.file.path);
        res.status(500).send({
            message: "An error occured during upload",
            error: error.message,
        });
    }
});

app.listen(PORT, ()=>{
    console.log("Server is running");
});