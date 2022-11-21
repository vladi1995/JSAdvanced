const dealership = require('./dealership.js');
const {expect} = require('chai');

describe('Dealership tests', () => {
    describe('newCarCost tests', () => {
        it('Return to dealers', () => {
            expect(dealership.newCarCost('Audi A4 B8', 50000)).to.equal(35000);
        });
        it('Return to dealers', () => {
            expect(dealership.newCarCost('Audi A6 4K', 20000)).to.equal(0);
        });
        it('Do not return to dealers', () => {
            expect(dealership.newCarCost('Audi', 20000)).to.equal(20000);
        });
    });

    describe('carEquipment tests', () => {
        it('Return to dealers', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0,1,2])).to.deep.equal(['heated seats', 'sliding roof', 'sport rims']);
        });
    });

    describe('euroCategory tests', () => {
        it('Category > 4', () => {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('Category = 4', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('Category < 4', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
    });
});