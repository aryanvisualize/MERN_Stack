//array literal
//let arr = [1, 2, 3, 4, 5];
//array constructor
let brr = new Array('aryan',1,true);
brr.push('Rastogi');
brr.pop();
console.log(brr);

brr.shift();
brr.unshift('Aryan rastogi');
console.log(brr);

brr.push(40);
brr.push(50);

brr.push(70);
console.log(brr);

//console.log(brr.slice(2,4));

//console.log(brr.splice(1,2,'akarui'));
//console.log(brr);

console.log(brr.splice(1,0,'akarui'));
console.log(brr);

//Map
let arr = [10,20,30,40];
arr.map((number, index)=>{
    console.log(number);
    console.log(index);
})

//Filter
let arr1 = [12,13,45,64,53,10,25,32];
// let evenArr = arr1.filter((number)=>{
//     if(number %2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// });
let evenArr = arr1.filter((number)=>{
    return number%2 === 0;
});
console.log(evenArr);

let newarr = [1,2,'Aryan','rastogi', null];

let ans = newarr.filter((value)=>{
    if(typeof value === "string") return true;
    else return false;
});
console.log(ans);

//Reduce
let arr2 = [1,2,3,4,5];
//Acumulator automatically takes the first value of array and currentValue takes the second value of array
//CurrentValue takes the next value of array and so on
let sum = arr2.reduce((acc,curr)=>{
    return acc + curr;
},0);
console.log(sum);

//Sort
let arr3 = [12,32,15,23,77,1];
arr3.sort();    //Ascending
console.log(arr3);
// arr3.reverse(); //reverse the array
//console.log(arr3);

arr3.sort((a,b)=> b-a);
console.log(arr3);

console.log(arr3.indexOf(77));
