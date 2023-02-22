function add() {
    const numbers = [...arguments];
    return numbers.reduce((total, arguments) => total + arguments);
}

function subtract() {
    const numbers = [...arguments];
    return numbers.reduce((total, arguments) => total - arguments);
}

function multiply() {
    const numbers = [...arguments];
    return numbers.reduce((total, arguments) => total * arguments);

}

function divide() {
    const numbers = [...arguments];
    return numbers.reduce((total, arguments) => total / arguments);
}

//takes an operator and array of numbers and then calls one of the above functions on the numbers
function operate(operator, numArray) {
    switch (operator) {
        case '+':
            return add(...numArray);
        case '-':
            return subtract(...numArray);
        case '*':
            return multiply(...numArray);
        case '/':
            return divide(...numArray);
    }
}

//functions that populate the display
