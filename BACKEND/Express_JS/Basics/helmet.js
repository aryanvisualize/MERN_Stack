import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import fs from "fs";

const app = express();
//Helmet is 1 stop solution for protection
app.use(helmet());
// app.use(morgan("dev"));
// app.use(morgan("tiny"));
app.use(morgan("combined"));

//CORS -> Cross Origin Resource Sharing
//It restricts from making requests from different origins. It is a security feature of browsers.
// It is used to prevent malicious websites from accessing resources on another domain without permission.

// app.use(
//     cors({
//         origin : "https://localhost:5173",
//     })
// )

const PORT = 3000;

app.post("/login", (req, res) => {
  console.log(req.body);
  fs.readFile("./Home.html", "utf-8", (err, data) => {
    if (err) return res.status(404).json({ message: "something went wring" });
    res.send(data);
  });
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.end("hi from register");
});

app.get("/", (req, res) => {
  res.end("hi");
});

app.listen(PORT, ()=>{
    console.log("Server is running at 3000");
});
