const readline = require('readline');

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculator = new Calculator();

const askQuestion = (query) => new Promise(resolve => rl.question(query, resolve));

const main = async () => {
    try {
        const num1 = parseFloat(await askQuestion('Enter the first number: '));
        const operator = await askQuestion('Enter the operator (+, -, *, /): ');
        const num2 = parseFloat(await askQuestion('Enter the second number: '));

        let result;
        switch (operator) {
            case '+':
                result = calculator.add(num1, num2);
                break;
            case '-':
                result = calculator.subtract(num1, num2);
                break;
            case '*':
                result = calculator.multiply(num1, num2);
                break;
            case '/':
                result = calculator.divide(num1, num2);
                break;
            default:
                console.log('Invalid operator');
                rl.close();
                return;
        }

        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        rl.close();
    }
};

main();