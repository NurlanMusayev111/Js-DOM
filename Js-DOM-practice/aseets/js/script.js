"use strict";



// let car1 = {
//     id:1,
//     marka:"Hyundai",
//     model:"Grandeur",
//     price:35000
// }

// let car2 = {
//     id:2,
//     marka:"Mercedes",
//     model:"eclass",
//     price:55000
// }

// let car3 = {
//     id:3,
//     marka:"BMW",
//     model:"g20",
//     price:75000
// }

// let car4 = {
//     id:4,
//     marka:"AUDI",
//     model:"A8",
//     price:122000
// }



// const brends = {
//     name:"Nurgun motors",
//     cars : [],

//     addCars:function(car){
//         if(car == "" || car == undefined){
//             alert("Input cant be empty");
//             return
//         }

//         this.cars.push(car);
//     },

//     getAllCars:function(){
//         return this.cars;
//     },


//     searchByMarka:function(text){
//         if(text == "" || text == undefined){
//             alert("Input cant be empty");
//             return;
//         }

        
//         const result = this.cars.filter(m =>m.marka.toLowerCase().trim().includes(text.toLowerCase().trim()))
//         return result;
//     },

//     searchById:function(id){
//         if(id == "" || id == undefined){
//             alert("Input cant be empty")
//             return;
//         }

//         const result = this.cars.find(m => m.id == id);
//         return result;
//     },


//     editCar:function(car){
//         if(car == undefined){
//             alert("Input cant be empty");
//             return;
//         }
        
//         let existCar = this.cars.find(m => m.id == car.id);

//         if(existCar == undefined){
//             alert("Data not found");
//             return;
//         }

//         existCar.marka = car.marka == undefined ? existCar.marka : car.marka;
//         existCar.model = car.model == undefined ? existCar.model : car.model;
//         existCar.price = car.price == undefined ? existCar.price : car.price;

//         console.log(existCar);
//     },

//     deleteCar:function(id){
//         return this.cars = this.cars.filter(m=>m.id !== id);
//     }
// }



// brends.addCars(car1);
// brends.addCars(car2);
// brends.addCars(car3);
// brends.addCars(car4);


// console.log(brends.getAllCars());

// console.log(brends.searchByMarka("m"));

// console.log(brends.searchById(3));


// brends.editCar({id : 2,model:"sclass"});
// brends.editCar({id : 1,model:"sonata"});

// let nextData = brends.getAllCars();

// console.log(nextData);

// console.log(brends.deleteCar(2));




// let nums1 = [1,2,3,4];
// let nums2 = [5,6,7,8];

// let res = [...nums1,...nums2];

// console.log(res);


// function showNums(...numbers){
//     numbers.forEach(element => {
//         console.log(element);
//     });
// }


// function test(){
//     arguments.forEach(element => {
//         console.log(element);
//     });
// }

// showNums(1,2,3,4,5);


// test(11,22,33,44);




//-------------------------------DOM-------------------------------------------------




// let h1 = document.getElementsByTagName("h1");

// console.log(h1);


// let elems = document.getElementsByClassName("test")

// console.log(elems);

// for (const item of elems) {
//     console.log(item);
// }


// let elem = document.getElementById("salam")

// console.log(elem);


// let elems = document.querySelectorAll("h1");

// for (const item of elems) {
//     console.log(item);
// }



// let elem = document.querySelector(".text");

// console.log(elem.innerText);
// console.log(elem.innerHTML);


// elem.innerText = "salamlar";

// elem.innerHTML = "<h1>Salamlar</h1>"


// elem.style.color = "red";
// elem.style.backgroundColor = "blue";
// elem.style.padding = "20px";

// elem.className = "salam";

// elem.classList.add("salam");
// elem.classList.remove("text");


// if(elem.classList.contains("text")){
//     elem.classList.remove("text")
// }



// let btn = document.querySelector(".add");

// btn.onclick = function(){
//     alert("Salamlar")
// }

// btn.onclick = function(){
//     alert("Necesiz")
// }

// let firstElem = document.querySelector(".first");
// let secondElem = document.querySelector(".second");
// let box = document.querySelector(".text");

// firstElem.addEventListener("click",function(){
    //box.style.backgroundColor = "red";

//     if(!box.classList.contains("first-color")){
//         box.classList.add("first-color")
//         box.classList.remove("second-color")
//     }
// })

// secondElem.addEventListener("click",function(){
    //box.style.backgroundColor = "blue";

//     if(!box.classList.contains("second-color")){
//         box.classList.add("second-color")
//         box.classList.remove("first-color")
//     }
// })



// let ul = document.querySelector("ul");


// document.querySelector(".add").addEventListener("click",function(){
//     let input = document.querySelector(".input-text");
//     let text = input.value;

//     if(text.trim() == ""){
//         document.querySelector(".validation").classList.remove("d-none")
//         return
//     }else{
//         document.querySelector(".validation").classList.add("d-none")
//     }

//     let li = document.createElement("li");
//     li.className = "list-group-item";
//     li.innerText = text;
//     ul.append(li);
//     input.value = "";
// })