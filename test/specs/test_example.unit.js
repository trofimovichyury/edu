import simpleObject from '../../src/test_me';
import { expect } from 'chai';

describe('simpleObject', () => {
    it('simpleMethod returns argument that he received', () => {
        const arg = 'hello';
        expect(simpleObject.simpleMethod(arg)).to.equal(arg);
    });
});