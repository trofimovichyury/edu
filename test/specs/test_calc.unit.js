import Calc from '../../calc/calculator';
import { expect } from 'chai';

let Calculator = new Calc;

describe('Calculator', () => {

    describe('the sum method adds two numbers', () => {

    it('the Calculator returns the sum of the numbers 1 and 1 equal to 2', () => {
        expect(Calculator.sum(1, 1)).to.equal(2);
    });
    it('the calculator returns the sum of the numbers -1 and 1 equal to 0', () => {
        expect(Calculator.sum(-1, 1)).to.equal(0);
    });
    it('the calculator returns the sum of the numbers -1 and -1 equal to -2', () => {
        expect(Calculator.sum(-1, -1)).to.equal(-2);
    });
    it('the calculator returns the sum of the numbers 0.5 and 0.5 equal to 1', () => {
        expect(Calculator.sum(0.5, 0.5)).to.equal(1);
    });
    it('the calculator returns NuN if the value of at least one of the parameters is not a number', () => {
        expect(isNaN(Calculator.sum('string', 1))).to.equal(true);
    });
    it('the calculator returns NuN if the value of at least one of the parameters is not a number', () => {
            expect(isNaN(Calculator.sum(NaN, 1))).to.equal(true);
    });
    it('the calculator returns NuN if the value of at least one of the parameters is not a number', () => {
            expect(isNaN(Calculator.sum('string', 'string'))).to.equal(true);
    });
});
});