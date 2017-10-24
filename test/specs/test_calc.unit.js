import Calc from '../../calc/calculator';
import { expect } from 'chai';

let Calculator = new Calc;

describe('Calculator', () => {

    describe('function sum', () => {

    it('return sum 1 and 1 equal to 2', () => {
        expect(Calculator.sum(1, 1)).to.equal(2);
    });
    it('returns NaN if the value of the  first parameter is not a number', () => {
        expect(isNaN(Calculator.sum('string', 1))).to.equal(true);
    });
    it('returns NaN if the value of the second parameter is not a number', () => {
            expect(isNaN(Calculator.sum(1, 'string'))).to.equal(true);
    });
    it('returns NaN if the value of at least one of the parameters is not a number', () => {
            expect(isNaN(Calculator.sum(NaN, 1))).to.equal(true);
    });
});
});