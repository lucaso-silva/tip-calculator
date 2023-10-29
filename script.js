"use strict";

const inputBill = document.getElementById("bill");
const inputNumPeople = document.getElementById("numPeople");
const percentValues = document.querySelectorAll(".pValue");


inputBill.addEventListener("blur", ()=> {
    let bill = inputBill.value;
    console.log(bill);
});

inputNumPeople.addEventListener("blur", ()=> {
    let numPeople = inputNumPeople.value;
    console.log(numPeople);
});''

for(let i = 0; i < percentValues.length; i++) {
    percentValues[i].addEventListener("input", ()=>{
        calculateTip(percentValues[i].id);
    })
}

function calculateTip(percId) {
    console.log(percId);
}
