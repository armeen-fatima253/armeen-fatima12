"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
let n1 = parseInt(prompt("first number: "));
let n2 = parseInt(prompt("second number: "));
let operator = prompt("operator('+','-','*','/'): ");
if (operator == "+") {
    console.log(n1 + n2);
}
else if (operator == "-") {
    console.log(n1 - n2);
}
else if (operator == "*") {
    console.log(n1 * n2);
}
else if (operator == "/") {
    console.log(n1 / n2);
}
else {
    console.log("pls select correct option");
}
