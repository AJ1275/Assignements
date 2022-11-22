const h1 = document.createElement("h1")
h1.textContent = "Javascript made this!"; 
document.getElementById("header").appendChild(h1); 
h1.className = "header"; 
const subTitle = document.createElement("h2") 
subTitle.innerHTML = '<span class="name">Annanikka</span> wrote the Javascript.'; 
document.getElementById("header").appendChild(subTitle); 
subTitle.className = "subtitle"; 
subTitle.style.textAlign = "center"; 

const messages = document.getElementsByClassName("message");
messages[0].textContent = "you're great";
messages[1].textContent = "thanks!";
messages[2].textContent = "you're welcome";
messages[3].textContent = "you're great";

const btn = document.getElementById("clear-button");
const inputs =  document.querySelector(".messages") 
console.log(inputs)
btn.addEventListener("click", function(){
inputs.textContent = ""
}); 

var dropDown = document.getElementById("theme-drop-down"); 
dropDown.addEventListener("change", themeChange);

function toggleClass(){
    for(let i = 0; i < messages.length; i++) {
        messages[i].classList.toggle("theme-two");
        if (dropDown.value = "theme-two"){
            dropDown.classList.toggle("theme-two");      
        }
        }
    }

function themeChange(){
    if (dropDown.value == "theme-two")
    for (let i = 0; i < messages.length; i++){
        if(i % 2 === 0){
            messages[i].style.color = "white"
            messages[i].style.backgroundColor = "black"
        }
        else if(i % 2 === 1){
            messages[i].style.backgroundColor = "red"
        }
    }
    else if (dropDown.value == "theme-one")
    for (let i = 0; i < messages.length; i++){
        if(i % 2 === 0){
            messages[i].style.color = "black";
            messages[i].style.backgroundColor = "burlywood";
        }
        else if(i % 2 === 1){
            messages[i].style.backgroundColor = "lightblue";
        }
    }
}
var sendBtn = document.getElementById("button");
var textbox = document.getElementById("input");

sendBtn.addEventListener("click", function(event){
    event.preventDefault()
    var newMessage = document.createElement("div");
    newMessage.className = "nMessage";
    newMessage.textContent = textbox.value;
    document.querySelector(".messages").appendChild(newMessage);
    for (let i = 0; i < messages.length; i++){
        if(i % 2 === 0){
            newMessage.setAttribute("class", "message left")
        }
        else if(i % 2 === 1){
            newMessage.setAttribute("class", "message right")
        }
    }
})

