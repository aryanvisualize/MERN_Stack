let arr = [19,98,67,54,37];

//for each loop
arr.forEach((value, index)=>{
    console.log("Number: ", value,"Index: ",index);
})

let obj = {
    name : "Aryan",
    age: 23,
    weight: 58,
    height: 5.5,
    greet: function() {
        console.log("Hello there");
    }
};

//for in loop
for(let key in obj){
    console.log(key," ",obj[key]);
}

//for of loop
let brr = [10,20,30,40];

for (let value of brr) {
    console.log(value);
}