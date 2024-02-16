"use strict";



let mode = document.querySelector(".mode");
let body = document.getElementsByTagName("body")


mode.addEventListener("click",function(){
    if(document.body.classList.contains("light-mode")){
        document.body.classList.remove("light-mode")
        document.body.classList.add("dark-mode")
    }else{
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode")
    }

})


