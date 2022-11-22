const square = document.querySelector(".square")

square.addEventListener("mouseenter", function(){
   this.style.backgroundColor = "blue"
})

square.addEventListener("mousedown", function(){
    this.style.backgroundColor = "red"
})

square.addEventListener("mouseup", function(){
    this.style.backgroundColor = "yellow"
})

square.addEventListener("dblclick", function(){
    this.style.backgroundColor = "green"
})

window.addEventListener("mousewheel", function(){
    this.style.backgroundColor = "orange"
})

document.addEventListener("keyup", function(Event){if(Event.key =='r'){
    document.querySelector(".square").style.backgroundColor = "red"
}
})

document.addEventListener("keyup", function(Event){if(Event.key =='g'){
    document.querySelector(".square").style.backgroundColor = "green"
}
})

document.addEventListener("keyup", function(Event){if(Event.key =='b'){
    document.querySelector(".square").style.backgroundColor = "blue"
}
})

document.addEventListener("keyup", function(Event){if(Event.key =='y'){
    document.querySelector(".square").style.backgroundColor = "yellow"
}
})

document.addEventListener("keyup", function(Event){if(Event.key =='o'){
    document.querySelector(".square").style.backgroundColor = "orange"
}
})