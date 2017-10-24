class Calc {
  constructor() {
}

sum(a, b) {
    let firstNumber = +a;
    let secondNumber = +b;
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return NaN;
    }
    return firstNumber + secondNumber;
}
};
const calculator = new Calc();

export default calculator;



