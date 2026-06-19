// const result = fetch("https://dummyjson.com/products");

// result
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.log("process done");
//   });


// // const p1 = Promise.reject("hello from 1");
// // const p2 = Promise.reject("hello from 2");
// // const p3 = Promise.reject("due to some error");

// // Promise.any([p1, p2, p3])
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

//  function fetchMango() {
//   const mango = await fetch("https://dummyjson.com/products");
//   const jsondata = await mango.json();
//   console.log(jsondata);
//   //   console.log(mango);
// }

// fetchMango();

//.then is used for promise consumption and .catch is used for error handling. 
// .finally is used to execute code after the promise is settled,
//  regardless of whether it was fulfilled or rejected.

const promiseOne = new Promise(function(resolve, reject){
  //Do an async task
  //DB call, cryptography, network
  setTimeout(function(){
    console.log('Async task is complete');
      resolve();  //If i dont put resolve then .then will not work
  },1000)
})

promiseOne.then(function(){
  console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve();
  },1000)
}).then(function(){
  console.log("Async 2 resolved");
})

const promise3 = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "Aryan", email: "asd@xyz"})
  },1000)
});

promise3.then(function(user){
  console.log(user);
});

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
          resolve({username: "Aryaan", password: "123"});
        } else{
            reject('ERROR : Something went wrong')
        }
    },1000)
})

const userName = promise4
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
  console.log(error);
})
.finally(function(){
  console.log("Finally=> The promise is either resolved or rejected");
});

const promise5 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    let error = true;
    if(!error){
      resolve({username:"Javascript", password:"123"})
    } else{
      reject('ERROR: JS went wrong')
    }
  },1000)
}); 

async function consumePromise5(){
    try { 
      const response =  await promise5;
      onsole.log(response); 
    } catch (error) {
      console.log(error);
    }
}

consumePromise5();
//Async wait cannot handle errors directly
