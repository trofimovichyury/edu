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
        if (this.isNumeric(a) && this.isNumeric(b)) {
            return a * b;
        }
        return NaN;
    }
    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
};




