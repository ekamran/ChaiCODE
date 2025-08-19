let num1 = 5;
let num2 = 3;
let operator = "+"; // try "+", "-", "*", or "/"

function simpleCal(operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return "Invalid Operator";
    }
}