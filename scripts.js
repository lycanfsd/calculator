const buttons = document.querySelectorAll('button');
const displayCalc = document.querySelector('#display-text');
const storedDisplayCalc = document.querySelector('#storedDisplayText');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const signButton = document.querySelector('.signChange');
const percentButton = document.querySelector('.percent');
const equals = document.querySelector('.equal');

let operator = '';
let previousValue = '';
let currentValue = '';

buttons.forEach(button => {button.addEventListener('click', () => processButton(button))});

function operate(operator, previousValue, currentValue) {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    switch (operator) {
        case '+':
            previousValue+=currentValue;
            break;
        case '−':
            previousValue-=currentValue;
            break;
        case 'x':
            previousValue*=currentValue;
            break;
        case '÷':
            if (currentValue == 0) {
                return "Cannot divide by 0";
            }
            previousValue/=currentValue;
            break;
    }
    previousValue = roundNum(previousValue);
    return previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function processButton(button) {
    if (displayCalc.textContent == "Cannot divide by 0") {
        clearCalc();
        displayCalc.textContent = '0';
        storedDisplayCalc.textContent = '';
    } else {
        if (button.classList.contains('operator')) {
            processOperator(button.textContent);
            storedDisplayCalc.textContent = `${previousValue} ${operator}`;
            displayCalc.textContent = currentValue;
        } else if (button.classList.contains('number')) {
            currentValue += button.textContent;
            displayCalc.textContent = currentValue;
        } else if (button.classList.contains('clear')) {
            clearCalc();
        } else if (button.classList.contains('equal')) {
            if (currentValue != '' && previousValue != '') {
                storedDisplayCalc.textContent = '';
                displayCalc.textContent = operate(operator, previousValue, currentValue);
                currentValue = displayCalc.textContent;
            }
        } else if (button.classList.contains('decimal')) {
            processDecimal();
        } else if (button.classList.contains('percent')) {
            currentValue /= 100;
            displayCalc.textContent = currentValue;
        } else if (button.classList.contains('signChange')) {
            currentValue *= -1;
            displayCalc.textContent = currentValue;
        }
    }
}

function processOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function processDecimal() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
    }
}

function clearCalc() {
    previousValue = '';
    currentValue = '';
    operator = '';
    displayCalc.textContent = '0';
    storedDisplayCalc.textContent = '';
}

function roundNum(number) {
    return Math.round(number * 1000) / 1000;
}