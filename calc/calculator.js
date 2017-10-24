export default class Calculator {
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



