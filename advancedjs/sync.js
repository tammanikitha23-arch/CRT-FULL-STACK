// console.log("start")
// console.log("Learning JS")
// console.log("End")

// //Asynchronous
// console.log("start");
// setTimeout(()=>{
//     console.log("Hello")
// },2000);//2sec
// console.log("End");

// //setTimeout():
// // execute a function "once" after a specified delay

// `
// Syntax:
// setTimeout(function(){
//     //code
// },delay);
// `
// //Example-1:
// setTimeout(function(){
//     console.log("Hello Students")
// },3000);

// //Example-2:
// console.log("Program started")
// //store time in timer
//  let timer=setTimeout(()=>{
//     console.log("Loading complete")
// },5000);
// console.log(timer)
// console.log("Program finished");

// //clearTimeout():stops a timeout before executing
// clearTimeout(timer);
// let timer1=setTimeout(()=>{
//     alert("Session expired")
// },10000);
// //cancel timeout
// // clearTimeout(timer1)

// //setInterval():
// //repeatedly executes a function
// //after a specified interval 

// `
// setInterval(function(){
//      //code
// },delay);
// `

// //Example:
// setInterval(function(){
//     console.log("hello")
// },2000);

// //counter Example:
// let count = 1
// let counter = setInterval(()=>{
//     console.log(count);
//     count++;
//     if(count == 10){
//         clearInterval(counter)
//     }
// },1000);

// setInterval(()=>{
//     let time = new Date();
//     console.log(time.toLocaleTimeString)
// },1000);
// //OTP expiry
// //SPlash screen
// //Auto logout
// //delay notification
// //Loading screen

// //Task:change colors of body using setinterval
// let colors=["red","blue","green","pink","yellow"];
// let index=0;
// setInterval(()=>{
//     document.body.style.backgroundColor=colors[index];
//     index++;
//     if(index == colors.length){
//         index=0;
//     }
// },2000);

// //callbacks:helps you executes task after another task finishes
// //callback functions:passed as argument to another function

// function greet(name){
//     console("hello"+name);
// }//higher order function
// function process(callback){
//     callback("Nikitha");
// }
// process(greet);
//Note:setTimeout uses callback functions
// setTimeout(function(){

// })

//async callbacks
// setTimeout(function(){
//     alert("hello")
// })

// //Multiple async task
// `
// login
// |
// get users
// |
// get orders
// |
// payments
// |
// logout

// setTimeout()--Callbacks
// Problem:callbacks leads to nested code
// callback hell:occurs when multiple callbacks
// nested inside one another
// 1.read
// 2.debug
// 3.maintain
// `
// login(function(){
//     getprofile(function(){
//         getorders(function(){
//             makepayment(function(){
//                 logout(function(){
//                     console.log("done")
//                 });
//             });
//         });
//     });
// });

// //to solve above problem
// //promises:represents the eventual compilation
`
// promises states
 
// pending
//    |
// resolved(success)
//     or
// rejected(failure)

// syntax:
// let promise =
//  new Promise(function(resolve,reject){

// });
// `

//create a promise
 let promise=new Promise((resolve,reject)=>{
    resolve("success");
});
console.log(promise)

//resolve is called:op is successfull

//handle the success
promise.then((result)=>{
    console.log(result)
});

//reject():called when op fails
let promise1=new Promise((resolve,reject)=>{
    reject("network error")
});
promise1.catch((error)=>{
    console.log(error)
});
//then():successful execution
//catch():used to handle the errors
function login(){
    return new Promise((resolve,reject)=>{
        let success=true;
        if(success){
            resolve("login sucessful")
        }
        else{
            rejected("login failed")
        }
    });
}
login()
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
});

//callback hell:
login(function(){
    profiler(function(){
        orders(function(){
            console.log("changing process")
        });
    });
});
//promises
// login()
// .then(getprofile)
// .then(getorders)
// .catch(error)

//Fake API call
function fetchDate(){
    return new
    Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data received")
        },3000);
    });
}
console.log("loading...")
fetchDate()
.then((data)=>{
    console.log(data)
})
console.log("please wait...")

`
Promise Flow:

create a promise
      |
      Pending -->reject()->.catch
      |      No
      Success?
      |yes 
      resolve()
      |
      .then()

`