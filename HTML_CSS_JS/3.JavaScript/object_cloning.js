let obj = {
    age: 18,
    name : "Aryan",
    location : 201301,
};

// console.log(obj);   

// //Objects are dynamic in nature
obj.color = "White";    //Can change the value at runtime
console.log(obj);

//Object cloning can be done using 3 methods :  //Different reference
let src = {
    age: 18,
    name : "Aryan",
    location : 201301,
};

// 1) Spread operator
let dest = {...src};
src.age = 90;
console.log(src);
console.log(dest);

//2) Assign Method
let src2 = {
    name2: "Suryansh",
    location: 271801,
}
let dest = Object.assign({}, src, src2);

console.log(src);
console.log(dest);

//3 Iteration   --> iteration on key value pair
let dest = {};
for(let key in src){
    let newKey = key;
    let newValue = src[key];
    //insert new key and value in dest and create a clone
    dest [newKey] = newValue;
}

console.log(src);
console.log(dest);
