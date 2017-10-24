import calculator from '../../calc/calculator';
import { expect } from 'chai';

describe('calculator', () => {
    it('the calculator returns the sum of the numbers 1 and 1 equal to 2', () => {
        expect(calculator.sum(1, 1)).to.equal(2);
    });
    it('the calculator returns the sum of the numbers -1 and 1 equal to 0', () => {
        expect(calculator.sum(-1, 1)).to.equal(0);
    });
    it('the calculator returns the sum of the numbers -1 and -1 equal to -2', () => {
        expect(calculator.sum(-1, -1)).to.equal(-2);
    });
    it('the calculator returns the sum of the numbers 0.5 and 0.5 equal to 1', () => {
        expect(calculator.sum(0.5, 0.5)).to.equal(1);
    });
});