const rentCar = require('./rentCar.js');
const { assert, expect } = require('chai');

describe ('Rent a car tests', () => {

    describe ('Search for a car tests', () => {
        it('Check if the type of model is not equal to string', () => {
            expect(()=>rentCar.searchCar([1,2,3], 12).to.equal('Invalid input!'))
        });

        it('Null parameters', () => {
            expect(()=>rentCar.searchCar().to.equal('Invalid input!'))
        });

        it('Check if the type of shop is not equal to array', () => {
            expect(()=>rentCar.searchCar(12, 'BMW').to.equal('Invalid input!'))
        });

        it('Check if the type of shop is not equal to array and type of model is not equal to string', () => {
            expect(()=>rentCar.searchCar(12, 12).to.equal('Invalid input!'))
        });

        it('Check if model is presented in the shop array - not present', () => {
            expect(()=>rentCar.searchCar(['Volkswagen', 'BMW', 'Audi'], 'Opel').to.equal('There are no such models in the catalog!'));
        });

        it('Check if model is presented in the shop array - presented one time', () => {
            let array = ['Volkswagen', 'BMW', 'Audi'];
            let model = 'Audi';
            expect(rentCar.searchCar(array, model)).to.equal(`There is 1 car of model Audi in the catalog!`);
        });

        it('Check if model is presented in the shop array - presented two times', () => {
            let array = ['Volkswagen', 'BMW', 'Audi', 'Audi'];
            let model = 'Audi';
            expect(rentCar.searchCar(array, model)).to.equal(`There is 2 car of model Audi in the catalog!`);
        });
    });

    describe('Calculate price of car tests', () => {
        it('Check if the type of model is not equal to string', () => {
            expect(()=>rentCar.calculatePriceOfCar([1,2,3], 12).to.equal('Invalid input!'));
        });

        it('Null parameters', () => {
            expect(()=>rentCar.calculatePriceOfCar().to.equal('Invalid input!'));
        });

        it('Check if the type of days is not equal to number', () => {
            expect(()=>rentCar.calculatePriceOfCar('model', 'model').to.equal('Invalid input!'));
        });

        it('Check if days is not an integer', () => {
            expect(()=>rentCar.calculatePriceOfCar('Audi', 3.14).to.equal('Invalid input!'));
        });

        it('Check if the type of model is not equal to string and type of days is not equal to number', () => {
            expect(()=>rentCar.calculatePriceOfCar([1,2,3], 'model').to.equal('Invalid input!'));
        });

        it('Check if the model is in the list - presented', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 30)).to.equal(`You choose Audi and it will cost $1080!`);
        });

        it('Check if the model is in the list - presented', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 0)).to.equal(`You choose Audi and it will cost $0!`);
        });

        it('Check if the model is in the list - not presented', () => {
            assert.throws(()=>rentCar.calculatePriceOfCar('Aud', 20), 'No such model in the catalog!');
        });
    });

    describe('Check budget tests', () => {
        it('Check if the type of costPerDay is not equal a number', () => {
            expect(()=>rentCar.checkBudget('abc', 20, 20).to.equal('Invalid input!'))
        });

        it('Null parameters', () => {
            expect(()=>rentCar.checkBudget().to.equal('Invalid input!'))
        });

        it('Check if the type is decimal', () => {
            expect(()=>rentCar.checkBudget(20, 2.5, 20).to.equal('Invalid input!'))
        });

        
        it('Check if the type is decimal', () => {
            expect(()=>rentCar.checkBudget(2.5, 20, 20).to.equal('Invalid input!'))
        });

        
        it('Check if the type is decimal', () => {
            expect(()=>rentCar.checkBudget(20, 20, 2.5).to.equal('Invalid input!'))
        });

        it('Check if the type is decimal', () => {
            expect(()=>rentCar.checkBudget(2.5, 2.5, 2.5).to.equal('Invalid input!'))
        });

        it('Check if the type of days is not equal to number', () => {
            expect(()=>rentCar.checkBudget(20, 'abc', 20).to.equal('Invalid input!'))
        });

        it('Check if the type of budget is not equal to number', () => {
            expect(()=>rentCar.checkBudget(20, 20, 'abc').to.equal('Invalid input!'))
        });

        it('Check if the type of budget, days and costPerDay are not equal to number', () => {
            expect(()=>rentCar.checkBudget('abc', 'abc', 'abc').to.equal('Invalid input!'))
        });

        it('Check if the budget is bigger than the cost', () => {
            expect(rentCar.checkBudget(20, 2, 60)).to.equal('You rent a car!');
        });

        it('Check if the budget is bigger than or equal to the cost', () => {
            expect(rentCar.checkBudget(20, 2, 40)).to.equal('You rent a car!');
        });

        it('Check if the budget is less than the cost', () => {
            expect(rentCar.checkBudget(20, 2, 30)).to.equal('You need a bigger budget!');
        });
    });
});