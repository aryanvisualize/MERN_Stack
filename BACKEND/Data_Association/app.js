const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res)=>{
    res.send("hola");
})

app.get("/create", async (req, res)=> {
    let user = await userModel.create({
        username: "aryan",
        age: 22,
        email: "aryan@gmail.com"
    });

    res.send(user);
})

app.get("/post/create", async (req, res)=> {
    let post = await postModel.create({
        postdata : "hello everyone how is it going",
        user: "6a587eb899261caf84ad50ba"
    })

    let user = await userModel.findOne({_id: "6a587eb899261caf84ad50ba"});
    user.posts.push(post._id);
    await user.save();

    res.send({post, user});
})

app.listen(3000);