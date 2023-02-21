function add() {
    const numbers = [...arguments];
    let sum = numbers.reduce((total, arguments) => total + arguments);
    return sum;
}

function subtract() {
    const numbers = [...arguments];
    let difference = numbers.reduce((total, arguments) => total - arguments);
    return difference;
}

function multiply() {
    const numbers = [...arguments];
    let product = numbers.reduce((total, arguments) => total * arguments);
    return product;
}

function divide() {
    const numbers = [...arguments];
    let quotient = numbers.reduce((total, arguments) => total / arguments);
    return quotient;
}

//takes an operator and 2 numbers and then calls one of the above functions on the numbers
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
    }
}

console.log(add(2, 2, 2, 10, 2)); //18
console.log(subtract(2, 2, 2, 10, -2)); //-10
console.log(multiply(2, 10, 5)); //100
console.log(divide(2, 10, 5)); //0.04