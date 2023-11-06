"use strict";

const inputBill = document.getElementById("bill");
const inputNumPeople = document.getElementById("numPeople");
const percentValues = document.querySelectorAll(".pValue");
const tipValue = document. querySelector(".tip-value");
const totalValue = document.querySelector(".total-value");

let bill;
let numPeople;


inputBill.addEventListener("blur", ()=> {
    bill = +inputBill.value;
});

inputNumPeople.addEventListener("blur", ()=> {
    numPeople = +inputNumPeople.value;
    console.log(numPeople);
});''

for(let i = 0; i < percentValues.length; i++) {
    percentValues[i].addEventListener("input", ()=>{
        displayTipAndTotal(percentValues[i].id);
    })
}

function displayTipAndTotal(percId) {

    let tipAmount = "";
    let total;

    switch(percId) {
        case "pc5":
            total = calculateTip(5);
            break;
        case "pc10":
            total = calculateTip(10);
            break;
        case "pc15":
            total = calculateTip(15);
            break;
        case "pc25":
            total = calculateTip(25);
            break;
        case "pc50":
            total = calculateTip(50);
            break;
        default:
            total = 100;
            break;
    }

    tipAmount = total - bill;
    console.log("bill + tips: " + total);
    console.log("tip: " + (total - bill));

    tipValue.innerHTML = `$ ${tipAmount/numPeople}`;
    totalValue.innerHTML = `$ ${total/numPeople}`
}

function calculateTip(percentage) {
    return bill + (bill * (percentage/100));

    console.log("total bill: " + total);
}