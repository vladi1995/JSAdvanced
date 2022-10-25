const lookupChar = require('./charLookUp.js');
const { assert, expect } = require('chai');

describe ('lookUpChar Function Tests', () => {
    it('If string is not a string', () => {
        assert.equal(lookupChar(123, 4), undefined);
    });

    it('If index is not a number', () => {
        assert.equal(lookupChar('asd', 4.15), undefined);
    });

    it('If index is not valid', () => {
        assert.equal(lookupChar('asd', 50), 'Incorrect index');
    });

    it('If index is not valid', () => {
        assert.equal(lookupChar('asd', -50), 'Incorrect index');
    });

    it ('Everything is ok', () => {
        //assert.equal(lookupChar('asd',2), 'asd'.charAt(2));
        expect(lookupChar('Love',2)).to.be.equal('v');
    });
});