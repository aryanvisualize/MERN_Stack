import express from "express";
import nodemailer from "nodemailer";
//Nodemailer is a third party library that is used to send emails from nodejs applications
//It gives 2 functionalities:
//1. Send email
//2. Receive email

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user : "aryanvisualize@gmail.com",
        pass : "lski klzj guhv bzyp",
    },
});

const mailOption ={
    from: "aryanvisualize@gmail.com",
    to: "akarui.aryan@gmail.com",
    subject : "sending the test mail for nodemailer",
    text: "Hello I have learned how to use nodemailer",
}

transport.sendMail(mailOption, function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log("Mail sent succesfully");
    }
})

app.get("/", (req, res)=>{
    res.end("hello there");
});


app.listen(PORT, ()=>{
    console.log("Server is running");
});