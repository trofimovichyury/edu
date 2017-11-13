export default class Calculator {
    sum(a, b) {
        if (this.isNumeric(a) || this.isNumeric(b)) {
            return a + b;
        }
        return NaN;
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

