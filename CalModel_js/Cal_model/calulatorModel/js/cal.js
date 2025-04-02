alert("Calculator Model Loaded");

var a = parseFloat(prompt("Enter first number:", 10)) || 10; 
var b = parseFloat(prompt("Enter second number:", 20)) || 20;
let operation = prompt("Enter operation (Addition, Subtraction, Multiplication, Division, Simple Interest, VAT):", "Addition") || "Addition";

let result = "Function is not being called";

console.log("Initial values of a and b are:", a, b, operation, result);

function Calculator() {
    if (operation === "Addition") {
        result = a + b;
        console.log("Addition:", result);
    } 
    else if (operation === "Subtraction") {
        result = a - b;
        console.log("Subtraction:", result);
    } 
    else if (operation === "Multiplication") {
        result = a * b;
        console.log("Multiplication:", result);
    } 
    else if (operation === "Division") {
        if (b !== 0) {
            result = a / b;
            console.log("Division:", result);
        } else {
            console.log("Error: Division by zero is not allowed.");
            result = "Undefined";
        }
    } 
    else if (operation === "Simple Interest") {
        let principal = parseFloat(prompt("Enter Principal Amount:")) || 0;
        let rate = parseFloat(prompt("Enter Annual Interest Rate (%):")) || 0;
        let time = parseFloat(prompt("Enter Time (in years):")) || 0;
        result = (principal * rate * time) / 100;
        console.log(`Simple Interest: ${result}`);
    }
    else if (operation === "VAT") {
        let price = parseFloat(prompt("Enter Price Amount:")) || 0;
        let vatRate = parseFloat(prompt("Enter VAT Rate (%):")) || 0;
        result = (price * vatRate) / 100;
        console.log(`VAT Amount: ${result}`);
    }
    else {
        console.log("Invalid Operation");
        result = "Invalid Operation";
    }
    return result;
}


result = Calculator();

console.log("Final value:", a, b, operation, result);
