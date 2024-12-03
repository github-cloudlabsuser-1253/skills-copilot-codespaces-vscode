class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = null;
    }

    appendNumber(number) {
        this.currentNumber += number;
        this.updateDisplay();
    }

    setOperation(operation) {
        if (this.currentNumber === '') return;
        if (this.previousNumber !== '') {
            this.calculateResult();
        }
        this.operation = operation;
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';
    }

    calculateResult() {
        if (this.currentNumber === '' || this.previousNumber === '' || this.operation === null) return;
        let result;
        const prev = parseFloat(this.previousNumber);
        const current = parseFloat(this.currentNumber);
        switch (this.operation) {
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
        this.currentNumber = result;
        this.operation = null;
        this.previousNumber = '';
        this.updateDisplay();
    }

    clearDisplay() {
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = null;
        this.updateDisplay();
    }

    updateDisplay() {
        this.displayElement.value = this.currentNumber;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const displayElement = document.getElementById('display');
    const calculator = new Calculator(displayElement);

    document.getElementById('btn-1').addEventListener('click', () => calculator.appendNumber('1'));
    document.getElementById('btn-2').addEventListener('click', () => calculator.appendNumber('2'));
    document.getElementById('btn-3').addEventListener('click', () => calculator.appendNumber('3'));
    document.getElementById('btn-add').addEventListener('click', () => calculator.setOperation('+'));
    document.getElementById('btn-4').addEventListener('click', () => calculator.appendNumber('4'));
    document.getElementById('btn-5').addEventListener('click', () => calculator.appendNumber('5'));
    document.getElementById('btn-6').addEventListener('click', () => calculator.appendNumber('6'));
    document.getElementById('btn-subtract').addEventListener('click', () => calculator.setOperation('-'));
    document.getElementById('btn-7').addEventListener('click', () => calculator.appendNumber('7'));
    document.getElementById('btn-8').addEventListener('click', () => calculator.appendNumber('8'));
    document.getElementById('btn-9').addEventListener('click', () => calculator.appendNumber('9'));
    document.getElementById('btn-multiply').addEventListener('click', () => calculator.setOperation('*'));
    document.getElementById('btn-0').addEventListener('click', () => calculator.appendNumber('0'));
    document.getElementById('btn-clear').addEventListener('click', () => calculator.clearDisplay());
    document.getElementById('btn-equals').addEventListener('click', () => calculator.calculateResult());
    document.getElementById('btn-divide').addEventListener('click', () => calculator.setOperation('/'));
});