//Dates

// let myDate = new Date();
// console.log(typeof(myDate));    //Date is a type of Object

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2003,11,5);       //Months start from 0 index
// let myCreatedDate2 = new Date("1976-06-15");     //Inside string it works normal

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate2.toDateString());

//TimeStamps
//  let myTimeStamp = Date.now();
//  console.log(myTimeStamp);
//  console.log(myCreatedDate.getTime());
//  console.log(Date.now());
//  console.log(Math.floor(Date.now()/1000));       //To convert it from milliseconds to seconds
 
 let newDate = new Date();
 console.log(newDate.getMinutes());
 console.log(newDate.getDay());
 console.log(newDate.getMonth());
 console.log(newDate.getYear());

//  newDate.toLocaleString('default',{     //Customization
//     weekday: "long"
//  })