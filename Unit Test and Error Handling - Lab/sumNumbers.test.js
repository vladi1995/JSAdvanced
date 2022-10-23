const sum = require('./sumNumbers.js');
const { assert } = require('chai');

describe('Test of function sum Numbers', () => {
    it('return sum of two numbers', () => {
        assert.equal(sum([1,2,3]), 6);
    });
});