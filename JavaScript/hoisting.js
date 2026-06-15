// {

//     //1) Functional hoisting-> where the function shifts to the top of its scope
//     sayMyName("Aryan rastogi");

//     function sayMyName(fullName){
//         console.log(fullName);
//     }


    // //  We can avoid functional hoisting using function expresion
    // greet();    //This will throw error
    // let greet = function(){
    //     console.log("Hello guys, its me!");
    // }

// }

// //2) variable hoisting
// //Here only the variable declaration has move up (var age);

// console.log(age);
// var age = 22;

// //let and const are used to avoid variable hosting
// console.log(name);  //--> Throws error
// let name = "Aryan";


//Class Hoisting is also not possible in js
const obj1 = new Human();   //Throws reference error
class Human {

}
