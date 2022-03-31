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
    this.focus();
    clickEqual();
    currentValue = display.textContent;
    newNumber = true;
    operator = this.textContent;
}

const clickEqual = function() {
    if (operator != '') {
        const total = operate(operator, Number(currentValue), Number(display.textContent));
        display.textContent = total;
        currentValue = total;
        operator = '';
    }
}

numberButtons = document.querySelectorAll('.numberButtons');
numberButtons.forEach(btn => btn.addEventListener('click', clickNumber));

operatorButtons = document.querySelectorAll('.operatorButtons');
operatorButtons.forEach(btn => btn.addEventListener('click', clickOperator))

equalsButton = document.querySelector('.equalsButton');
equalsButton.addEventListener('click', clickEqual);

clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', function(e) {
    currentValue = 0;
    newNumber = true;
    operator = '';
    display.textContent = currentValue;
});

plusMinus = document.querySelector('.plusMinus');
plusMinus.addEventListener('click', () => {
    const num = display.textContent;
    if (num != 0) {
        if (num[0] === '-') {
            display.textContent = num.substring(1);
        }
        else {
            display.textContent = `-${num}`;
        }
    }
});

percentButton = document.querySelector('.percent');
percentButton.addEventListener('click', () => {
    display.textContent = Number(display.textContent) / 100;
})