const express = require('express');
const app = express();

const userModel = require('./usermodel')

app.get('/', (req, res)=>{
    res.send("hey");
})


//Learning CRUD Operation

app.get('/create', async (req, res)=>{          //Create
    let createUser = await userModel.create({
        name: 'Aryan',
        email: "aryanrastogi@123",
        username: 'aryan'
    })
    res.send(createUser)
})

app.get('/read', async (req, res) =>{           //Read
    let users = await userModel.find({username: 'aryan'});
    res.send(users);
})

app.get('/update', async (req, res)=>{          //Update
    let updatedUser =  await userModel.findOneAndUpdate({username : 'aryan'}, {name : 'sarita aryan rastogi'}, {new : true});
    res.send(updatedUser);
})


app.get('/delete', async (req, res)=>{          //Delete
    let users = await userModel.findOneAndDelete({name : 'Aryan'});
    res.send(users);
})

const PORT = 3000;
app.listen(PORT);