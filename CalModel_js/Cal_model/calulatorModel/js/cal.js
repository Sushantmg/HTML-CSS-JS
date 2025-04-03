alert("Calculator Model Loaded");

var a = parseFloat(prompt("Enter first number:", 10));  
var b = parseFloat(prompt("Enter second number:", 20));
let operation = prompt("Enter operation (Addition, Subtraction, Multiplication, Division, Simple Interest, VAT, Modulus, Power, Square Root):", "Addition");

let result;

console.log("Initial values of a and b are:", a, b, operation);

function Calculator() {
    if (operation === "Addition") {     
        result = a + b;
    } 
    else if (operation === "Subtraction") {
        result = a - b;
    } 
    else if (operation === "Multiplication") {
        result = a * b;
    } 
    else if (operation === "Division") {
        result = b !== 0 ? a / b : "Error: Division by zero is not allowed.";
         /* (:) yo conditional operator ho , short way to write if else statement*/
    } 
    else if (operation === "Simple Interest") {
        let principal = parseFloat(prompt("Enter Principal Amount:"));
        let rate = parseFloat(prompt("Enter Annual Interest Rate (%):"));
        let time = parseFloat(prompt("Enter Time (in years):"));
        result = (principal * rate * time) / 100;
    }
    else if (operation === "VAT") {
        let price = parseFloat(prompt("Enter Price Amount:"));
        let vatRate = parseFloat(prompt("Enter VAT Rate (%):"));
        result = (price * vatRate) / 100;
    }
    else if (operation === "Modulus") {
        result = a % b;
    }
    else if (operation === "Power") {
        result = Math.pow(a, b);
    }
    else if (operation === "Square Root") {
        result = Math.sqrt(a);
        
    }
   
    else {
        result = "Invalid Operation";
    }
    console.log("Result:", result);
    return result;
}

result = Calculator();

console.log("Final value:",result);
