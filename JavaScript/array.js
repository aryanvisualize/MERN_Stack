//Array

const arr = [0,1,2,3,4,5]
//console.log(arr[0]);

const myArr =  new Array(1,2,3,4);
const fiction = ["IronMan", "SpiderMan","Batman","SuperMan"];

myArr.push(6);
myArr.push(7);
//myArr.pop();

myArr.unshift(0);   //Add value at the start of Array -> Its a time consuming process
myArr.unshift(9)                    //Shifts all the elements of Array by 1

myArr.shift();      //removes element from start of Array

// console.log(myArr.includes(8));     //Find if array contains specific element or not
// console.log(myArr.indexOf(7));      //returns the index of element
// console.log(myArr.indexOf(19));   //if array does not contain it return -1
// console.log(myArr);

const newArr = myArr.join();   //Binds all the array element into a string

// console.log(newArr);
// console.log(typeof(newArr));


//Slice & Splice
// console.log("A ", myArr);

const myn1 = myArr.slice(1,3);    //Returns a copy of section of array
// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1,3);     //It manipulates the original array, also includes last element 
// console.log("C ", myArr);   
// console.log(myn2);


const marvelChar = ["thor", "ironman", "spiderman"];
const dcChar = ["Superman", "flash", "batman"]; 


//Push
//marvelChar.push(dcChar);
// console.log(marvelChar);    //[ 'thor', 'ironman', 'spiderman', [ 'Superman', 'flash', 'batman' ] ]
// console.log(marvelChar[3][1]);  //flash


//Concat
const allChar = marvelChar.concat(dcChar);
//console.log(allChar);   //[ 'thor', 'ironman', 'spiderman', 'Superman', 'flash', 'batman' ]

//Spread
const newChar2 = [...marvelChar, ...dcChar];
//console.log(newChar2);  //[ 'thor', 'ironman', 'spiderman', 'Superman', 'flash', 'batman' ]

//Flat
const anotherArr = [1, 2, 3,[4, 5, 6], 7,[6, 7,[4, 5]]];
const usableArr = anotherArr.flat(Infinity);    //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
//console.log(usableArr);


console.log(Array.isArray("Aryan"));    //false
console.log(Array.from("Aryan"));   //[ 'A', 'r', 'y', 'a', 'n' ]
console.log(Array.from({name : "Aryan"}));  //[] --> Object is passed, we need to tell either array of keys/value

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score2));   //Returns new Array from set of elements
//[ 100, 200, 200 ]