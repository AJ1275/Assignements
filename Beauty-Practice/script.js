var title = document.getElementById("title")
title.style.color = "green"
title.style.fontFamily = "Courgette"
var characters = document.querySelectorAll(".characters")
for (var i = 0; i < characters.length; i++){
    console.log(characters[i])
}
var element = document.getElementById("intro")
console.log(element.textContent)
var text = element.innerText
console.log(text)
var pText = document.getElementById("intro-p").innerText = text
element.style.color = "blue"
element.style.fontSize = "50px"
var cList = document.getElementById("cList")
cList.style.color = "purple"
cList.style.textAlign = "left"
element.innerHTML = "Hello!"
var inputBox = document.getElementById("text-input")
console.log(inputBox.value)
inputBox.value = "This is some magic~"
var newLi = document.createElement("li")
var characterList = document.getElementById("characterList")
characterList.append(newLi)
newLi.textContent = "Art"
document.body.innerHTML += "<p id='paragraph'> A rose by any other name...</p>"
var paragraph = document.getElementById("paragraph")
paragraph.style.textAlign = "center"
var faveColors = [
    "Green",
    "Blue", 
    "Red",
    "Black",
    "White", 
    "Orange"
]
var colorsList = document.getElementById("colors")
for (var i = 0; i < faveColors.length; i++){
   var colorName = document.createElement("li")
   colorName.textContent = faveColors[i]
   colorsList.append(colorName)
}