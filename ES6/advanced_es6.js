//Before ES6
let student={
    greet:function(){
        console.log("Hello");
    }
};
student.greet()

//with ES6
let student1={
    greet(){
        console.log("Hello");
    }
};
student1.greet()

//Computed property names
let key="Course";
let student2={
    [key]:"MERN"
};
console.log(student2);

//Optional Chaining(?.)
//OC safely accesses nested properties
//without OC
// let faculty={
//     name:"Nikitha"
// };
// console.log(faculty.address.city);

//with OC
let faculty1={
    name:"Nikitha"
};
//Prevents the errors when property is not available
console.log(faculty1.address?.city);

//Nested Example:
let employee={
    personal:{
        name:"Rahul"
    }
};
console.log(employee.personal?.location)

//Optional chaining with arrays
let colors = ["red","green"];
console.log(colors[0])
console.log(colors?.[5])

//OPC with functions
let student3={
    greet(){
        console.log("Hello")
    }
};
student3.greet?.()

//Nullish coalescing(??)
//Provides a default value "only"
// when the left value is either null or undefined 
//syntax:value??defaultvalue
//Example:
let username=null;
console.log(username??"Guest")

let city;
console.log(city??"Somewhere on the earth")

// //  ||
let age=0;
console.log(age ?? 18)

let score=null;
let result=score??36;
console.log(result);

//React Example:
// const username1=user?.name??"Guest";

const employee1={
    id:101,
    name:"seema"
};
console.log(employee1.address?.city??"Not Available")

let arr=[10,20,30,40]
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
// New method 
arr.forEach((num) =>{
    console.log(num)
});

//callback function:
//is a function passed as an argument to another function
//call back funtion
function greet(name){
    console.log("Hello"+name);
};
//Higher order function
function process(callback){
    //calling callback
    callback("Nikitha")
}
process(greet)

//callback using arrow function
function process(callback){
    callback()
};
process(()=>{
    console.log("Welcome Students")
})

//Higher order function
//Accepts another function as an argument
            //or
//returns another function 

//Addition
//Higher order function
function calculate(operation,a,b){
    return operation(a,b)
}
function add(a,b){
    return a+b;
}
console.log(calculate(add,10,20));

//Subtraction
function calculate(operation,a,b){
    return operation(a,b)
}
function sub(a,b){
    return a-b;
}
console.log(calculate(sub,30,20));

//Multiplication
function calculate(operation,a,b){
    return operation(a,b)
}
function mul(a,b){
    return a*b;
}
console.log(calculate(mul,10,20));

//division
function calculate(operation,a,b){
    return operation(a,b)
}
function div(a,b){
    return a/b;
}
console.log(calculate(div,100,20));

//For-Each -->used for iterations 
//syntax:array.foreach(function(element){
//});
let numbers=[10,20,30,40]
numbers.forEach(function(num){
    console.log(num)
});

//arrow function:
numbers.forEach((num,index)=>{
    console.log(index,num)
});

//Map():map(function,iterables)->python 
//Create a new array
//original array remains unchanged
let nums=[10,20,30];
let doubled=nums.map((num)=>{
    return num*2
});
console.log(doubled)

//let names=["Rahul","Priya","Vishnu"]
//use map to make all the names to upper case
let names=["rahul","priya","vishnu"];
let upper=names.map(name=>name.toUpperCase());
console.log(upper)

//filter:returns elements
//satisfying the condition 
let number=[10,20,30,40,50]
let even=number.filter(num=>num%2==0);
console.log(even)

//Reduce():
// reduces the array into a single unit

let nums1=[10,20,30];
let sum=nums1.reduce((total,num)=>{
    return total+num;
},0)
console.log(sum)

//find():
// returns the first matching element
let value=nums1.find(num=>num>25);
console.log(value);

let Students4=[
    {id:1,name:"Raji"},
    {id:2,name:"Divya"},
];
let student5=Students4.find(s=>s.id==2);
console.log(student5)

//some():returns true if any element satisfies
console.log(nums1.some(num=>num>25))

//every():returns true if all the elements satisfies the condition
console.log(nums1.every(num=>num>5));

//Variable scopes
//function scope:
function teacher(){
    var hello=10;
    let age1=33;
    console.log(age1)
    console.log(hello)
}
teacher()
//console.log(age1)
//console.log(hello)

//Block scope:anything inside the {} is block scoped
if(true){
    let city="Hyderabad";//cant acceseed &have block scope
    var country="India";//can be accessed-function scope only
    const frnd="Manish"//cant accessed &have block scope
}
console.log(city)
console.log(country)
// console.log(frnd)

if (true){
    var a=10;
    let b=20;
    const c=30;
}
console.log(a)
// console.log(b)
// console.log(c)

//Closures: It is created when an inner function remembers variables from its outer function 
// even after outer function completes its execution
function outer(){
    let count=0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const counter=outer();
counter()
counter()
counter()

//Lexical environment:
// It is created whenever a function is created 
//It stores the variables,functions,reference to the parent scopes
// let x=10;
// function outer(){
//     let y=20;
//     function inner(){
//         console.log(x);
//         console.log(y);
//     }
//     inner();
// }
// outer();

//Every function knows where it is created 
// that is called lexical environment

//How javascript executes the code
`
                Javascript file\
                        |
                execution context created(environment where js code executes)
                        |
                code executes
                        |
                functions added to call stack  
                        |
                stack becomes empty
                        |
                program ends

-->Every program:
global execution context

every function call creates function execution context

example:
let a=10;
function greet(){
console.log("hello")
};

greet()

            global execution context
                    |
                  greet()
                    |
            function execution context
                    |
                 removed

1st phase:memory creation phase 
Js allocates memory
var a;
function greet(){}
            |
    2nd phase:execution phase
    values are assigned and 
    functions are executed 
                |
            3rd phase-->call stack:
            keeps a track of functions
            LIFO-last in first out
            
`
