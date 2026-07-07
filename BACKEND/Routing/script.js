const fs = require('node:fs');

//writeFile
//copyFile
//renamefile
//unlinkfile

// fs.writeFile("hey.txt", "Hey there how are you", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.rename("C:\\Users\\aryan\\Desktop\\MERN Stack\\BACKEND\\Routing\\hey.txt","hello.txt", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.copyFile("hello.txt", "./copy/copy.txt", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// });

const http = require('http');

const server = http.createServer(function(req, res){
    res.end("hello world");
})

server.listen(3000);