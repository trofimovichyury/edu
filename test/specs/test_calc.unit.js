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
    describe('function multiply', () => {
        it('return multiplying 2 and 2 equal to 4', () => {
            expect(Calculator.mul(2, 2)).to.equal(4);
        });
        it('return multiplying 0 and 2 equal to 0', () => {
            expect(Calculator.mul(0, 2)).to.equal(0);
        });
        it('return multiplying -2 and -2 equal to 4', () => {
            expect(Calculator.mul(-2, -2)).to.equal(4);
        });
        it('return multiplying -2 and 2 equal to -4', () => {
            expect(Calculator.mul(-2, 2)).to.equal(-4);
        });
        it('returns NaN if the value of one of the parameters is NaN', () => {
            expect(isNaN(Calculator.mul(2, NaN))).to.equal(true);
        });
        it('returns NaN if the value of one of the parameters is a string', () => {
            expect(isNaN(Calculator.mul(2, 'string'))).to.equal(true);
        });
        it('returns NaN if the value of one of the parameters is null', () => {
            expect(isNaN(Calculator.mul(2, null))).to.equal(true);
        });
        it('returns NaN if the value of one of the parameters is undefined', () => {
            expect(isNaN(Calculator.mul(2, undefined))).to.equal(true);
        })
    });
});