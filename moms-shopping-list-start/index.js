const form = document.addItem
const submitBtn = document.querySelector(".submit")

form.addEventListener("submit", function(event){
    event.preventDefault()
    let list = document.getElementById("list");
    const newDiv = document.createElement("div");
    newDiv.className = "nDiv"
    const newItem = document.createElement("li");
    newItem.className = "newItem";
    newItem.setAttribute('contenteditable', true)
    newItem.textContent = form.title.value;
    list.append(newDiv);
    newDiv.append(newItem);
    console.log(title.value)
    form.title.value = "";

    const edit = document.createElement("button");
    edit.textContent = "Edit";
    const removeItem = document.createElement("button");
    removeItem.textContent = "X";
    newDiv.append(edit, removeItem);
    edit.className = "editBtn";
    removeItem.classList = "removeBtn";

    removeItem.addEventListener("click", function(){
        newDiv.remove()
    }); 

edit.addEventListener("click", function handleClick(){
    if(edit.textContent === 'Edit'){
        const saveBtn = document.createAttribute("button")
        saveBtn.textContent = 'Save'
        
        edit.textContent = 'Save'

    } else if(edit.textContent === 'Save'){
        edit.textContent = 'Edit'
    }
    })
            
    })
    

; 




const deleteBtn = document.getElementsByName("delete-button")[0]
const item = document.querySelectorAll(".item")[0]
console.log(item)
