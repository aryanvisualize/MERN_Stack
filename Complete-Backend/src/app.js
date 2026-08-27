const express = require('express');
const connectDB = require('./db/db.js'); 
const noteModel = require('./models/note.model.js');
const app = express();

connectDB();

app.use(express.json());    //To parse the data using middleware

/**
 * note = {
 *  title: "note_title"
 *  description: "note_description"
 * }
 */

const notes = [];

//Create a note -> POST
app.post('/notes', (req, res)=>{
    const data = req.body
    noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note created"
    })
})

//View all the notes created so far -> GET
app.get('/notes',async (req, res)=>{
    const notes =  await noteModel.find()
    res.status(200).json({
        message:"Notes fetched successfully",
        notes: notes
    })
})

//Delete a note -> Delete
app.delete('/notes/:id', async (req, res)=>{       //Dynamic route is considered to be params
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })
    
    res.status(200).json({
        message: "Note deleted successfully"
    })

})

//Update details in a list
app.patch('/notes/:id', async (req, res)=>{
    const id = req.params.id;
    const description = req.body.description;
    //findOneAndUpdate -> {} {} takes two objects 1st for the searching, second for what to update
    await noteModel.findOneAndUpdate({_id: id}, {description: description})

    res.status(200).json({
        message: "note Updated succcessfully"
    })
})


module.exports = app;