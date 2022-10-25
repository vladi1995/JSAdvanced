const isOddOrEven = require('./isOddOrEven.js');
const { assert } = require('chai');

describe('Check string tests', () => {
    //Invalid input tests
    it ('should return undefined if parameter is number', () => {
        assert.equal(isOddOrEven(10), undefined);
        assert.equal(isOddOrEven([1,2,3]), undefined);
    });

    it ('should return undefined if parameter is an array', () => {
        assert.equal(isOddOrEven([1,2,3]), undefined);
    });

    it ('should return undefined if parameter is object', () => {
        assert.equal(isOddOrEven({name: 'Ivan'}), undefined);
    });

    it ('should return undefined if parameter is undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });
    
    it ('should return undefined if parameter is null', () => {
        assert.equal(isOddOrEven(null), undefined);
    });

    //Valid input tests
    it ('should return string length = even', () => {
        assert.equal(isOddOrEven('Ivan'), "even");
    });

    it ('should return string length = odd', () => {
        assert.equal(isOddOrEven('Ivo'), "odd");
    });
});