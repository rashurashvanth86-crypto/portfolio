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


// ✅ CONTACT FORM CONNECTED TO BACKEND

document.getElementById("contactForm").addEventListener("submit", async function(e){

e.preventDefault();

const name = document.querySelector('input[type="text"]').value;
const email = document.querySelector('input[type="email"]').value;
const message = document.querySelector('textarea').value;

try {

const response = await fetch("https://portfolio-fks1.onrender.com/contact", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ name, email, message })
});

const data = await response.json();

alert(data.msg);

} catch (error) {
console.error(error);
alert("❌ Failed to send message");
}

});
