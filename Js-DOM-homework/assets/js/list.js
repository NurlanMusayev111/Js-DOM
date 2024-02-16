"use strict";

let ul = document.querySelector("ul");


document.querySelector(".add").addEventListener("click",function(){
    let input = document.querySelector(".input-text");
    let text = input.value;

    if(text.trim() == ""){
        document.querySelector(".validation").classList.remove("d-none")
        return
    }else{
        document.querySelector(".validation").classList.add("d-none")
    }

    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = text;
    ul.append(li);

    let deleteButton = document.createElement("span");
    deleteButton.addEventListener("click",function(){
        li.remove();
    })
    deleteButton.innerHTML = '<i class="fa-solid fa-x"></i>'
    li.append(deleteButton);
    input.value = "";

})