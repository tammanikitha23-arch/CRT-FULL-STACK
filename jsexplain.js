//conditional statements
//1.If statement
let age=20;
if (age>=18){
    console.log("Eligible")
}
//2.If-else 
if(age>=18){
    console.log("Eligible")
    document.write("Eligible")
}
else{
    console.log("Not Eligible")
}
//Else-if ladder:
let marks=89;
if(marks>90){
    console.log("Grade A")
}
else if(marks>=80){
    console.log("Grade B")
}
else if(marks>45){
    console.log("Grade C")
}
else{
    console.log("Fail")
}
//4.switch statement
let day=2
switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    default:
        console.log("Invalid day")
}

//For loop:
for (let i=0;i<=5;i++){
    console.log(i)
}

// 1.Multiplication table of 7 using 
// template literals and for loop
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 2. Do the sum of odd numbers
// from 5-50
let sum=0;
for(let i=5;i<=50;i++){
    if(i%2!==0){
        sum+=i;
    }
}
console.log("Sum=",sum);

//find the fact of 6
//fact(6) 6_5_4_3_2_1=720
let fact=1
for(let i=6;i>=1;i--){
    fact*=i;
}
console.log(fact);

//while loop
let i=1;
while(i<=5){
    console.log(i)
    i++;
}
// //Do-while
// let password;
// do{
//     password=prompt("Enter the password:")
// }while(password!=1234){
//     console.log("login success")

//continue:skips the current iteration
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}
//do the sum of first n numbers
let n=Number(prompt("enter the number:"))
let total=0
for(let i=1;i<=n;i++){
    total1=total1+i
}
console.log(total1)