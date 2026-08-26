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
app.delete('/notes/:index', (req, res)=>{       //Dynamic route is considered to be params
    const index = req.params.index

    delete notes[index]

    res.status(200).json({
        message: "note deleted successfully"
    })
})

//Update details in a list
app.patch('/notes/:index', (req, res)=>{
    const index = req.params.index;
    const description = req.body.description;

    notes[index].description = description

    res.status(200).json({
        message: "note Updated succcessfully"
    })
})


module.exports = app;