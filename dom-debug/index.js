const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})
const dropDown = createDropDown()
function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = new Option(colors[i], colors[i])
        dropDown.append(option)
    }
    dropDown.addEventListener("change", function(e){
        e.target.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown 
}

function createSubItem(e){
    const subItem = document.createElement("div");
    subItem.innerHTML = "Test";
    document.body.appendChild(subItem)
    var subItemValue = document.getElementById("input").value
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


