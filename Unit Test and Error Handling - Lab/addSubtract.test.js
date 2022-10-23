const createCalculator = require('./addSubtract.js');
const { assert, expect } = require('chai');

describe('Function add and subtract tests', () => {

    let calc = null;
    // this runs before each block
    beforeEach(() => {
        calc = createCalculator();
    });

    it('get calc', () => {
        assert.equal(calc.get(), 0);
    });

    it('add from sum', () => {
        calc.add(5);
        calc.add(5);
        assert.equal(calc.get(), 10);
    });

    it('subtact from sum', () => {
        calc.subtract(5);
        calc.subtract(5);
        assert.equal(calc.get(), 0);
    });

    it('add and subtract from sum', () => {
        calc.add(5.5)
        calc.subtract(5.5);
        assert.equal(calc.get(), 0);
    });

    it('complicated', () => {
        calc.add(10);
        calc.subtract('7');
        calc.add('-2');
        calc.subtract(-1);
        assert.equal(calc.get(), 2);
    });

    it('NaN', () => {
        calc.add('hello');
        assert.equal(calc.get(), NaN);
    });
});