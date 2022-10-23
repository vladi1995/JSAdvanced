const rgbToHexColor = require('./rgbToHex.js');
const { assert } = require('chai');

describe('RGB to HEX tests', () => {
    //first number tests

    it ('check first color if string', () => {
        assert.equal(rgbToHexColor('abc', 0, 255), undefined);
    });

    it ('check first color > 255', () => {
        assert.equal(rgbToHexColor(256, 0, 255), undefined);
    });

    it ('check first color < 0', () => {
        assert.equal(rgbToHexColor(-5, 0, 255), undefined);
    });

    //second number tests
    it ('check second color if string', () => {
        assert.equal(rgbToHexColor(0, 'abc', 255), undefined);
    });

    it ('check second color > 255', () => {
        assert.equal(rgbToHexColor(0, 256, 255), undefined);
    });

    it ('check second color < 0', () => {
        assert.equal(rgbToHexColor(0, -5, 255), undefined);
    });

    //third number tests
    it ('check third color if string', () => {
        assert.equal(rgbToHexColor(0, 0, 'abc'), undefined);
    });

    it ('check third color > 255', () => {
        assert.equal(rgbToHexColor(255, 0, 269), undefined);
    });

    it ('check third color < 0', () => {
        assert.equal(rgbToHexColor(5, 0, -5), undefined);
    });

    //correct test
    it ('correct solution', () => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000');
    });

    it ('correct solution', () => {
        assert.equal(rgbToHexColor(52, 20, 120), '#341478');
    });
    
    //combine tests
    it ('combine test 1', () => {
        assert.equal(rgbToHexColor(-5, -5, -5), undefined);
    });

    it ('combine test 2', () => {
        assert.equal(rgbToHexColor('asd', 'asd', 'asd'), undefined);
    });

    it ('combine test 3', () => {
        assert.equal(rgbToHexColor(-5, 'asd', 5), undefined);
    });

    //arr input
    it ('input arr', () => {
        assert.equal(rgbToHexColor([]), undefined);
    });

    //nothing input
    it ('input nothing', () => {
        assert.equal(rgbToHexColor(), undefined);
    });

    //input three arrays
    it ('input three arr', () => {
        assert.equal(rgbToHexColor([], [], []), undefined);
    });

    //input three decimals
    it ('input three arr', () => {
        assert.equal(rgbToHexColor(2.14, 2.18, 2.22), undefined);
    });

    //input highest
    it ('input three arr', () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
    });
});