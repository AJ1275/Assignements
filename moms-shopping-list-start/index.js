const form = document.addItem
const submitBtn = document.querySelector(".submit")

form.addEventListener("submit", function(event){
    event.preventDefault()
    let list = document.getElementById("list");
    const newDiv = document.createElement("div");
    newDiv.className = "nDiv"
    const newItem = document.createElement("li");
    newItem.className = "newItem";
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

edit.addEventListener("click", function(){
    if(edit.textContent === 'Edit'){
      const saveInput = document.createElement('input');
      saveInput.type = 'text';
      saveInput.value = newItem.textContent;
      newDiv.insertBefore(saveInput, newItem);
      newDiv.removeChild(newItem);
      edit.textContent = 'Save';
    } else if(edit.textContent === 'Save'){
        const saveInput = newDiv.firstChild;
        const saveLi = document.createElement('li');
        saveLi.textContent = saveInput.value;
        newDiv.insertBefore(saveLi, saveInput);
        newDiv.removeChild(saveInput);
        edit.textContent = 'Edit'
    }
    })
            
    })
    

; 




const deleteBtn = document.getElementsByName("delete-button")[0]
const item = document.querySelectorAll(".item")[0]
console.log(item)
