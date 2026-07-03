//functions:It is a reusable block of code
//which performs some actions

//python example
//def function_name(parameters):
//      statements

//function_name(arguments)
//js function example
//define the function

function greet(){
    //code to execute
    console.log("welcome students")
}
//calling the function

greet()
greet()
greet()
greet()

function greeting(name){
    console.log("hello"+name)
}
//call the function
greeting("srilatha")


//multiple params
function add(a,b){
    console.log(a+b);

}
add(2,3);
//return:send backs the value where the
//function is called
//function sub(a,b){
//    console.log(a-b)
//}

function sub(a,b){
    return(a-b);
}
let result=sub(10,5)
console.log(result)
//Task:write a function for a 
//square of a num
function square(num){
    return num*num
    console.log("finished")
}
let squarel=square(5)
console.log(squarel)

function test(){
    return "hello";
    console.log("this code wil never executes")
}
let test1=test();
console.log(test1)

//variable scopes
let college="CITY"
function showCollaege(){
    console.log(college)
}
showCollaege();

//Local variable
function showAge(){
    let age=20;
    console.log(age);
}
showAge();
// console.log(age)

//Hoisting:
//js moves declaration to the top
//before the execution

console.log(name1)
var name1 = "Prathyusha"
var name1;

//How js sees exactly
//console.log(name1)
//name1="Prathyusha"

//console.log(age1)
//let age1=20;
///Hhosting with const

console.log()
const city="Hyd"

//Hosting with functions
//call
greeting1()
function greeting1(){
    console.log("Hello")
}
//Functions are completely hosited
//Function Expression:
//inside a variable

//let result1 = greeting1()
//function stored in a variable
let display = function(){
    console.log("Hello student")
}
//calling the variable
display()
//Hosting with function expression
//test2()
let test2=function(){
    console.log("Hi")
}
//Example2
let calculate_area = function(length,breadth){
    return length*innerWidth;
}
console.log(calculate_area(3,5))

//create a function that return
//Largest of two numbers
let a = 10;
let b = 20;
if (a > b) {
    console.log(a + " is the largest");
} else {
    console.log(b + " is the largest");
}
//Create a function expression to
//to calculate area of a circle

let radius = 5;
let area = Math.PI * radius * radius;
console.log("Area of the circle is:", area);

//Arrays:collection of elements of (similar dt)
// to calculate area of circle 
//student="Nikitha"
// student1,student2,student3,...,n
//arr=["Nikitha",3.14,True]  python 
//let newarr=[value1,value2,value3]
let arr=["Apple","banana","custard",3.14,true]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

let numbers=[10,20,30,40]
console.log(numbers[numbers.length-1])
//returns length
console.log(numbers.length)

//Modifying the element
numbers[0]=9
console.log(numbers)

//Traversing
//for i in list:
//  print(i)
//Traversal:visiting each and every element

let fruits=["Apple","Banana","pine"]
//using for loop
for(i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//for ..of loop
for(let fruit of fruits){
    //fruit is storing the current element
    console.log(fruit)
}
//sum of array 10-15
let array1 = [10, 11, 12, 13, 14, 15];
let sum = 0;

for (let i = 0; i < array1.length; i++) {
    sum += array1[i];
}

console.log("Sum =", sum);
//find largest number
let arr2=[10,50,60,90,5,95]
let largest = arr2[0];
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > largest) {
        largest = arr2[i];
    }
}
console.log("Largest number is:", largest);
arr2.push(5)
console.log(arr2)
//removes element
arr2.pop()
console.log(arr2)
//restoring the removed element
let removed=arr2.pop();
console.log(removed)

//remove the first element
arr2.shift();
console.log(arr2);
//remove the first element
let firstremoved = arr2.shift();
console.log(firstremoved)
//add element at the beging
arr.unshift(10);
console.log(arr2);

//Python -- slicing
//arr[start:end:step]
//splice()--js
//used for --1 adding,2.del,3.replacing elements
//Syntax:
//Array.splice(startIndex,delete_Index,new_values)
let veggies=["carrot","Beetroot","Brinjal"]
veggies.splice(1,1)
//1-->startindex
//1-->deleteindex
console.log(veggies)
//adding element
veggies.splice(1,0,"Bitter Gaurd")
console.log(veggies)
//replace element
veggies.splice(1,1,"Bottele Gaurd")
console.log(veggies)
//slice-->creates a copy of
//a portion of array
//array.slice(start,end)

let nums = [10,20,30,40,50]
let result1 = nums.slice(0,2)
console.log(result1)
//copy entire array
//let nums = [10,20,30,40,50]
//let result1 = nums.slice()
//console.log(result1)

//Task: arr[10,20,30,40,50,60]
//create a new array containing elements
//from index 2-4
let arr3 = [10, 20, 30, 40, 50, 60];
let newArr = [];

for (let i = 2; i <= 4; i++) {
    newArr.push(arr3[i]);
}

console.log(newArr);
//String:: sequence of characters
//closed '',"",``
let name = 'Nikitha';
let name2 = "Nikitha";
let name3 = `Nikitha`;

//Indexing in strings:
let str = "Hello"
       //  01234
console.log(str[0])
console.log(str[1])
console.log(str[2])
//string length
console.log(str.length)
let newStr = str.replace("H", "W");
console.log(newStr);
//Traverse over the string
for(i=0;i<str.length;i++){
    console.log(str[i])
}
//for..of
for(let ch of str){
    console.log(ch);
}

//string methods
let firstName = "Raju"
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
//Removing the extra spaces
let hello = "Bye";
console.log(hello.trim());
//includes()
let course = "JavaScript"
console.log(course.includes("Script"))
//startwith
console.log(firstName.startsWith("R"))
//Ends with
console.log(firstName.endsWith("U"))
//indexOf
console.log(firstName.indexOf("R"))
//lastindexOf:
console.log(firstName.lastIndexOf("a"))
//replace():
let str1 = "I love javascript"
str1.replace("javascript","Python")
console.log(str1)

//ReplaceAll():
let str2 = "cat dog cat"
console.log(str2.replaceAll("cat","lion"));

//slice
console.log(course.slice(0,3));
//substring:
let str3 = "Programing"
console.log(str3.substring(3,8))
//split():
let str4 = "HTML,CSS,JS,REACT"
console.log(str4.split(","))

//charAt:
console.log(str4.charAt(4))

//concat()
let first = "Niki"
let last = "tha"
console.log(first.concat(" ",last));

//Objects:collection of key:value pair
let student={
    //complex nested object
    personal:{
    name:"poorvansh",
    rollno:5,
    course:"MERN",
    is_permenent:true,
    greet:function(){
        console.log("welcome")
    },
    //nested object
    address:{
    city:"hyd",
    state:"TG",
    pincode:234567
    }
}
};
console.log(student)
console.log(student.rollno)
console.log(student["course"])
//add a new property:
student.city="KHAMMAM"
console.log(student.city)

//update the value
student.rollno=9;
console.log(student.rollno)
//delete property
delete student.city;
console.log(student)

//Task:create an object
//named:employee
//store the details of employee
//update the salarynto 45000
//remove his city
//write a function expression inside
//the object and call outside
//add birth details in a nested object
let Employee = {
    name:"Saranya",
    id:23245,
    salary:40000,
    city:"HYd"
};
console.log(Employee)
//salary update
Employee.salary = 45000;
console.log(Employee.salary)
//remove city
delete Employee.city;
console.log(Employee)

//Traversing over the objects
let employee={
    name:"Nikitha",
    em_id:13,
    city:"Guntur",
};

//for..in loop
for(let key in employee){
    console.log(key,employee[key])
}
//only keys
console.log(Object.keys(employee))
//only values
console.log(Object.Values(employee))
//in a list format
console.log(Object.entries(employee))
//for ..of 
for(let [key,value] of Object.entries(employee)){
    console.log(key,value);
}
