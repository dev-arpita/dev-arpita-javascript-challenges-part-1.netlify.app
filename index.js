
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el");
// Create four functions: add(), subtract(), divide(), multiply()
function add() {
    let result = (num1 + num2);
    sumEl.textContent = "sum: " + result;
}
function subtract() {
    let result = (num1 - num2);
    sumEl.textContent = "sum: " +result;
}
function divide() {
    console.log(num1 / num2);
    sumEl.textContent ="sum: " + num1 / num2;
}
function multiply() {
    console.log(num1 * num2);
    sumEl.textContent = "sum: " + num1 * num2;
}


