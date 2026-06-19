//compile time error
// Syntax error
console.log(1;


//Runtime error
//Reference error
console.log(x);


try{
    //code in which error can occur
    console.log("Try block starts here");
    console.log(x);
    console.log("try block ends here");
}
catch(err){
    //Defines How to handle error
    //Retry logic
    //fallback mechanism
    //custom error
    console.log("An error has occured");
    console.log("I am inside the catch block");
}

 finally{
    console.log("I will run each time, the program gets executed");
}

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid Json");
}