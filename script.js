// Create a calculator app for the Odin Project

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const operate = function (op, a, b) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

//Make buttons do things

const display = document.querySelector('#display');
let currentValue = 0;
let newNumber = true;
let operator = '';
display.textContent = currentValue;

const clickNumber = function(e) {
    if (display.textContent == 0 || newNumber === true) {
        display.textContent = this.textContent;
        newNumber = false;
    }
    else {
        display.textContent = `${display.textContent}${this.textContent}`;
    }
}

const clickOperator = function(e) {
    newNumber = true;
    console.log(this.textContent);
}

const clickEqual = function(e) {
    console.log('EQUALS');
}

numberButtons = document.querySelectorAll('.numberButtons');
numberButtons.forEach(btn => btn.addEventListener('click', clickNumber));

operatorButtons = document.querySelectorAll('.operatorButtons');
operatorButtons.forEach(btn => btn.addEventListener('click', clickOperator))

equalsButton = document.querySelector('.equalsButton');
equalsButton.addEventListener('click', clickEqual);

// Break time. Work on operator so I should be able to click 7 + 3 and when I
// click plus again it updates display to 10 and I can continue without pressing
// equals. 