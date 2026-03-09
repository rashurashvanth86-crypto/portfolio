// typing animation

const text = [
"Cloud Computing Student",
"Future Cloud Architect",
"Web Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}

setTimeout(type,120);
}

type();


// contact form

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Message sent successfully!");

});