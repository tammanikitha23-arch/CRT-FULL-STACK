//Selecting the elements
let heading=document.getElementById("title")
console.log(heading)

//2nd method
//query selector():
//return the first matching element
//id,class,tag
let heading1=document.querySelector("#title")
console.log(heading1)

//sellecting by class
let Bio=document.querySelector(".bio")
console.log(Bio)

//selecting by tagname
let head2=document.querySelector("h2")
console.log(head2)

//selecting all same tags
let paragraph=document.querySelectorAll("p")
console.log(paragraph)

//loop through the elements
paragraph.forEach((item)=>{
    console.log(item.innerText);
});

//Manupulation:change the text
heading.innerText="Welcome to Chalapathi";

//reading the element:
console.log(
    document.getElementById("title").innerText
);

//read html
console.log(
    document.getElementById("title").innerHTML
);

document.getElementById("course").innerHTML="Javascript"

//changing multiple elements
let pragraph=document.querySelectorAll("p")

paragraph.forEach((para)=>{
    para.innerText="all";
});

//js can change css also
function changestyle(){
    let heading3=document.getElementById("title")
    heading3.style.backgroundColor="pink";
    heading3.style.fontsize="40px";

    //Border 
    heading.style.border="2px solid black";
    heading.style.width="300px";
};



