//ES6 Concepts
//``  ----Template literal `${}`
//old method
var name="Nikitha";
console.log("Hello",+name)

//with ES6 
const name1="Nikitha";
console.log(`Hello ${name1}`)

//let vs var
var name="Bush";
var name="sri";
var name="banana";
console.log(name)

//var redeclares the variable
//which can lead to bugs

//Let:when the value needs to be changes
let age=22;
age=33;
console.log(age)

//const:when dont

//want to change value
const pi=3.14;
//pi=3.15;
//const pi =3.17; cant redeclare

//object with const
const student={
    name:"Nikitha",
};
student.name="Nikitha";
console.log(student)

//Arrow functions:

function greet(){
    console.log("Welcome")
};
//new school
const greet=(name)=>{
    return "hello"+name
};
console.log(greet("Nikitha"));
const greet1=name =>`hello ${name}`;

const addition=(a,b)=>{
    return a+b
}
console.log(addition(10,20))

//task:create an arrow function
//to calculate simple interest

//why arrow functions in react
// const App=()=>{
//     return <h1>Hello</h1>
// }

//Expresions:
let a=10;
let b=20;
console.log(`sum is ${a+b}`)

//multiline strings:
let message=`
hello i am a good student
also a good girl
      
`;
console.log(message)

//default parameters
function greet3(name="guest"){
    console.log(`hello ${name}`)
};
greet3();
//arrow func
const greet4=(name="srilatha")=>{
    console.log("hello"+name)
};
greet4()


//Desrtucturing:alllows extracting
//values from arrays
//our objects into variables 
let colors=["Red","Blue","green","voilet"]
let first=colors[0];
console.log(first)
let second=colors[1];
console.log(second)

//Destructuring:
let[first1,second1]=colors;
console.log(first1)
console.log(second1)

let numbers=[10,20,30,40,50]
// let a=10
// let c=30
//skips the value
let [x,z]=numbers;
console.log(x)
console.log(z)

//RestOperator  with desrtucting
let [first1,...remianing] = numbers;
console.log(first2);
console.log(remaining);

//object destructuring:
let faculty = {
    name:"Nikitha",
    branch:"CSE",
    f_id:100
};
// let name5 = faculty.name;
// let branch=faculty.branch;

//destructuring:
let{name6,branch}=faculty;
console.log(name8);
console.log(branch2);

//remaining the variables
let {name8:faculty}=faculty;
console.log(FacultyName)
console.log(faculty)

//Default values
let {name8:FacultyName1,city="HYd"}=faculty
console.log(city)

//Nested objects destructuring
let Student={
    first_name:"Jolly",
    address:{
        city1:"Hyderabad",
        state:"TS"
    }
};
let {
    address:{city1}
}=Student;
console.log(city1)

//Advanced Es6 concepts

//spread operator(...):
//Expand the array or object into individual
//elements or properties
//used for :
//1.copy arrays
//2.Merge arrays
//3.copy objects
//4.Merge objects
//5.pass array elements 
//as function arguments

//syntax :...array,...object
//Example-1:
nums = [10,20,30,40]
//spread expands array into individual 
//values
console.log(...nums)

//Example-2:
let arr1 = [10,20,30,40]
let arr2 = [...arr1];
arr2.push(50);
console.log(...arr1);
console.log(...arr2);


//Example-3:
let frontend = ["HTML","CSS"]
let backend = ["Node","Express"]
let fullstack = [...frontend,...backend]
console.log(fullstack)

//Spread objects:
let frnds ={
    f_name:"Lilly",
    age: 21
};
let copy ={
    ...frnds
};
console.log(copy)

//Merging the objects
let personal ={
    first_name:"Nani",
};
let address = {
    current_city:"Guntur"
};
let merged ={
    ...personal,
    ...address
}
console.log(merged)

//Rest parameters:(...)
//spread --> expand the values
//rest -->collects the value

//syntax:
//function demo(...values){}

function sum_demo(...numbers){
    let total=0
    for(let num of numbers){
        total +=num;
    }
    return total
};  
console.log(sum_demo(10,20,30))
console.log(sum_demo(20,40,50))

function student2_marks(name,...marks){
    console.log(name);
    console.log(marks);
};
student2_marks("Rahul",80,40)

//Enhanced object literals
//object will be shorter
let f_name = "Prathyu"
let l_name = "sha"
//self.name = name
let Employee = {
    f_name:f_name,
    l_name:l_name
};
console.log(Employee)

//with ES6
let company={
    f_name,
    l_name
};
console.log(company)

