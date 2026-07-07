const express = require('express');
const app = express()
const port = 3000

// 

//Requests  

//get requests
app.get('/', (req, res)=>{
    res.send("Got a GET Request")
});

app.post('/items',(req,res)=>{
    res.send("Got a POST request")
})

app.put('/items/:id',(req,res)=>{
    res.send("Got a PUT request")
})

app.delete('/items/:id', (req,res)=>{
    res.send("Got a DELETE request")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})