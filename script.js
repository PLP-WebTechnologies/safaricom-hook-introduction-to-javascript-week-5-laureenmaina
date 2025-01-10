// Question 1:Variables and Data Types

// String 
let name = "Laurine";
console.log("Name: " + name + " (Type: " + typeof name + ")");

// Number 
let age = 58;
console.log("Age: " + age + " (Type: " + typeof age + ")");

// Boolean 
let isStudent = false;
console.log("Is student: " + isStudent + " (Type: " + typeof isStudent + ")");

// Array
let hobbies = ["cooking", "coding", "hiking"];
console.log("Hobbies: " + hobbies + " (Type: " + typeof hobbies + ")");

// Object variable
let girl = {
  firstName: "Laurine",
  lastName: "June",
  age: 20,
  isEmployed: true
};
console.log("Girl: " + JSON.stringify(girl) + " (Type: " + typeof girl + ")");

//Question 2: Operators
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calculator() {
    readline.question("Enter the first number: ", (num1Input) => {
    readline.question("Enter the second number: ", (num2Input) => {
    readline.question("Choose an operation (+, -, *, /): ", (operator) => {
    const num1 = parseFloat(num1Input);
    const num2 = parseFloat(num2Input);

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Invalid input. Please enter numbers only.");
            readline.close();
            return;
        }

        if (!["+", "-", "*", "/"].includes(operator)) {
            console.log("Invalid operation. Please choose +, -, *, or /.");
            readline.close();
            return;
        }

        if (operator === "/" && num2 === 0) {
            console.log("Cannot divide by zero.");
            readline.close();
            return;
        }

            let result;
            switch (operator) {
                case "+": 
                    result = num1 + num2; 
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*": 
                    result = num1 * num2;
                    break;
                case "/": 
                    result = num1 / num2; 
                    break;
            }

            console.log(`Result: ${result}`);
            readline.close();
        });
    });
});
}

calculator();

