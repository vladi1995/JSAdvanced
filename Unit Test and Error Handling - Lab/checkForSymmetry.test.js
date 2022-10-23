const isSymmetric = require('./checkForSymmetry.js');
const { assert } = require('chai');

describe('function test', () => {
    it ('is not array', () => {
        assert.equal(isSymmetric(123), false);
    });

    it ('is not array', () => {
        assert.equal(isSymmetric('123'), false);
    });

    it ('is not array', () => {
        assert.equal(isSymmetric({}), false);
    });

    it ('is symmetric', () => {
        assert.equal(isSymmetric([1, 2, 1]), true);
    });

    it ('is symmetric', () => {
        assert.equal(isSymmetric([-1, 2, -1]), true);
    });

    it ('is symmetric', () => {
        assert.equal(isSymmetric(['a', 'b', 'a']), true);
    });

    it ('is symmetric', () => {
        assert.equal(isSymmetric(['a', 'b', 1, 'b', 'a']), true);
    });

    it ('is symmetric', () => {
        assert.equal(isSymmetric([[1,2,3], [1,2], [1,2,3]]), true);
    });

    it ('is not symmetric', () => {
        assert.equal(isSymmetric([1,2,3,2]), false);
    });

    it ('is not symmetric', () => {
        assert.equal(isSymmetric(['a','a','b','c']), false);
    });
});