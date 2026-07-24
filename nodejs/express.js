// import fs from "fs";

// fs.writeFile("message.txt",  "Hello from Aryan", (err)=>{
//     if(err) throw err;
//     console.log("The file has been saved");
// });

// fs.readFile("./message.txt","utf-8", (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })
import express from 'express';
import fs from "fs";


//There is no middleware support in nodejs
//Here we have middlewares and controllers
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let items = [
    {id: 1, name: "Aryan"},
    {id: 2, name: "Suryansh"}
];

app.get("/allitems", (req, res)=>{
    res.json(items);
});

app.get("/items", (req, res)=>{
    console.log(req.query);
    res.end("bye");
})

app.get("/items/:id", (req, res)=>{
    const id = Number(req.params.id);
    const item = items.find((item) => item.id === id);
    res.json(item);
})

//API is link that serves you something or connect u somewhere

app.get("/", (req, res)=>{
    res.send("Hello");
})
//If one of the route goes down, it wont affect the rest of code
//Hence the problem of IOC is solved here.
app.get("/about", (req, res)=>{
    res.send("Hi from about page");
})

app.post("/login", (req,res)=>{
    console.log(req.body);
    res.end("login done");
});

app.get("/file",(req, res)=>{
    fs.readFile("./aryan.html", "utf-8", (err, data)=>{
        if(err) return err;
        else res.end(data);
    });
});

app.get("/products", (req, res)=>{
    fs.readFile("./product.json", "utf-8", (err,data)=>{
        if(err) return err;
        // res.json(data);
        res.send(`
            <html>
                <head>
                    <title>products</title>
                    <body>
                        <h1>Products</h1>
                        <p>${data}</p>
                    </body>
                </head>
            </html>
        `)
    })
});

app.get("/aryan",(req, res)=>{
    res.render("aryan");
})

app.listen(3000, ()=>{
    console.log('Server Started');
});