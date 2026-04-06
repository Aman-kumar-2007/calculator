let display = document.getElementById("display");

let currentInput = "";
let operator = "";
let firstNumber = "";

function appendValue(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    firstNumber = "";
    operator = "";
    display.value = "";
}

function setOperator(op) {
    firstNumber = currentInput;
    operator = op;
    appendValue(op);
    currentInput = "";
}

function calculate() {
    let secondNumber = currentInput;
    let result = 0;

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
        display.value = "Invalid";
        return;
    }

    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    else if (operator === "*") {
        result = num1 * num2;
    }
    else if (operator === "/") {
        if (num2 === 0) {
            display.value = "Error";
            return;
        }
        result = num1 / num2;
    }
    display.value = result;

    currentInput = result.toString();
}

