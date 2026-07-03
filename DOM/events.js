//selecting of elements
let button=document.querySelector("button")
console.log(button)

//Dom manupulation
function showMessage(){
    alert("Hello")
}

//event listeners

//external events
// button.addEventListener("click",function(){
//     alert("clicked");
// });
button.addEventListener("click",showMessage)

//selecting
let form=document.getElementById("loginForm");
let course=document.getElementById("course");
let picker = document.getElementById("colorPicker");
let username = document.getElementById("username");
let count = document.getElementById("count");
//dom manupulation
function login(event){
    //helps to stop page default
    event.preventDefault();
    alert("form submitted")
}
//event listerner
form.addEventListener("submit",login)
//change-->occurs when event changes
//change event
course.addEventListener("change",function(){
    let current_value=course.value ;
    console.log(current_value)
});
//color picker
picker.addEventListener("change",function(){
    document.body.style.backgroundColor = picker.value;
});

//keyup:event-->when the key release
input.addEventListener("keyup",function(){
    console.log(input.value)
});

input.addEventListener("keyup",function(){
    count.innerText=input.value.length;
});

//Task:Lightbulb example
//with two button switch on and off

function turnOn() {
    document.getElementById("bulb").src =
        "https://www.w3schools.com/js/pic_bulbon.gif";
}
function turnOff() {
    document.getElementById("bulb").src =
        "https://www.w3schools.com/js/pic_bulboff.gif";
}

//Event obejct:
button.addEventListener("click",function(event){
    console.log(event.target)
    console.log(event.type)
    console.log(event)
});

// Properties:
// 1.Target-->Element thet triggered the event  
// 2.Type-->event name
// 3.value-->current input value
// 4.preventDefault()-->stops the reloading