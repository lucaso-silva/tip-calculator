"use strict";

const inputBill = document.getElementById("bill");
const inputNumPeople = document.getElementById("numPeople");
const percentValues = document.querySelectorAll(".percent");


inputBill.addEventListener("blur", ()=> {
    let bill = inputBill.value;
    console.log(bill);
});

inputNumPeople.addEventListener("blur", ()=> {
    let numPeople = inputNumPeople.value;
    console.log(numPeople);
});

percentValues.forEach((pValue)=> console.log(pValue.id));


