let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
    currentNumber += number;
    document.getElementById('display').value = currentNumber;
}

function setOperator(op) {
    if (currentNumber === '') return;
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    if (previousNumber === '' || currentNumber === '' || operator === '') return;
    let result = 0;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    document.getElementById('display').value = currentNumber;
    previousNumber = '';
    operator = '';
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    document.getElementById('display').value = '';
}