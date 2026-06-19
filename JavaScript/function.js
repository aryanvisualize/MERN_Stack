// //Functions are treated as first class Citizens

let obj = {
    age: 22,
    wt: 59,
    ht: 5.5,
    greet: ()=>{
        console.log("hello world");
    }
}
console.log(obj.age);
obj.greet();

// const arr = [      //Array of functions ->functions can be stored in data structures
//     function (a,b) {
//         return a+b;
//     },
//     function (a,b) {
//         return a-b;
//     },
//     function (a,b) {
//         return a*b;
//     },
//     function (a,b) {
//         return a/b;
//     }
// ];

// let first = arr[2];
// let ans = first(10,5);
// console.log(ans);


// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
// let ans = solve(5);
// console.log(ans(10));


// function greetMe(greet, fullName){  //Higher order function
//     console.log("hello ", fullName);
//     greet();
// }

// let greet = function(){
//     console.log("Greetings for the day");
// }
// greetMe(greet, "Aryan")
// //greet();



// let arr = [1, 2, 3, 4, 5];
// function getSum(arr){
//     let sum = 0;
//     arr.forEach((value)=>{
//         sum += value;
//     })
//     return sum;
//     // let len = arr.length;
//     // let sum = 0;
//     // for(let i=0;i<len;i++){
//     //     sum += arr[i];
//     // }
//     // return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);


