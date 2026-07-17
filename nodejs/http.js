import http from "http";
// console.log(http);
//============================================================================
//Express is a syntactical sugar over http
//Express follows the modular approach

//NodeJS works on REPL -> Read Evaluate Print Loop 

const server = http.createServer((req, res)=>{  //There is a problem of IOC(Inversion of Control) 
    //res.end("Hello world");
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.body);
    // 
    
    if(req.url==="/login" && req.method==="POST"){
        let body = "";
        req.on("data",(chunk)=>{
            body += chunk;
        });
        req.on("end", ()=>{
            console.log(JSON.parse(body));
            res.end("login successful");
        })  //This is the example of event driven architecture
    }

    if(req.url==="/file" && req.method==="GET"){
        
    }
})  
 
server.listen(3000);


//=============================================================================
//Status code :
//100-199 -> Information
//200-299 -> Successful response
//300-399 -> Redirection response
//400-499 -> Client side error response
//500-599 -> Server error response
//==============================================================================

//Query -> It is a built-in module in Node.js that allows you to create HTTP servers and clients.
//  It provides functionalities to handle HTTP requests and responses,
//  making it easier to build web applications and APIs.

//Purge -> Used to clear cache or remove unnecessary data from memory,
//  improving performance and freeing up resources.
//  Holds for sometime, if required can be restored.

//Options -> Used in preflight requrests and TCP handshake to specify the allowed methods,
//  headers, and other configurations for cross-origin requests.