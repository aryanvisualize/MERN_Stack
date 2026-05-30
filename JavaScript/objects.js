// EXAMPLE 1: Copying objects
let person1 = {
    fname: "Aryan",
    lname: "Rastogi",
    age: 30,
    address: {
        city: "Noida",
        state: "UP",
        country: "India"
    }
};


//EXAMPLE 2: new Object() syntax

// let person = new Object();
// person.fname = "aryan"; // adding properties after creation




let person2 = person1; // This creates a reference to the same object in memory
console.log(person1); // Output: { fname: 'Aryan', lname: 'Rastogi', age: 30, address: { city: 'Noida', state: 'UP', country: 'India' } }
console.log(person2); // Output: { fname: 'Aryan', lname: 'Rastogi', age: 30, address: { city: 'Noida', state: 'UP', country: 'India' } }
person2.age = 35; // Modifying person2 also modifies person1 because they reference the same object
console.log(person1.age); // Output: 35

// Shallow copy with spread (nested address still shared):
let person2 = { ...person };

// // Deep copy with structuredClone (fully independent):
// let person2 = structuredClone(person);

// Deep copy with JSON (loses functions/undefined/Date):
// let person2 = JSON.parse(JSON.stringify(person));

// person2.address.city = "agra"; // with shallow copy, this changes person too!
// console.log(person2);
// console.log(person);

//Object.freeze(person1);
Object.seal(person1);

// EXAMPLE 4: Array destructuring
// -------------------------------------------------------
// let fruits = ["apple", "mango", "cherry"];
// let [second, ...rest] = fruits;
// console.log(second); // "apple" (first element)
// console.log(rest[0]); // "mango" (rest is ["mango", "cherry"])


let obj1 = {
  fname: "vikas",
  age: 25,
  print: function (city) {
    // 'this' refers to the object that calls this method
    console.log(this.fname, this.age, city);
  },
};

let obj2 = {
  fname: "aryan",
  age: 20,
};

// obj1.print.call(obj2, "etawah");
// → Calls print() with obj2 as 'this', city = "etawah"
// → Output: "aryan 20 etawah"

// obj1.print.apply(obj2, ["agra"]);
// → Same as call but arguments passed as array
// → Output: "aryan 20 agra"

// obj1.print.bind(obj2, "noida")();
// → bind returns a NEW function with obj2 as 'this'
// → The () at the end immediately calls that new function
// → Output: "aryan 20 noida"