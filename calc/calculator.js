export default class Calculator {
    sum(a, b) {
        let firstNumber = +a;
        let secondNumber = +b;
        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            return NaN;
        }
        return firstNumber + secondNumber;
    }
    mul(a, b) {
        return a * b;
    }
};





