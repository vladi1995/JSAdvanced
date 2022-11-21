function christmasDinner() {
    class ChristmasDinner {
        constructor(budget) {
            this.budget = budget;
            this.dishes = [];
            this.products = [];
            this.guests = {};
        }

        set budget(value) {
            if (value < 0) {
                throw new Error("The budget cannot be a negative number");
            }
            this._budget = value;
        }

        get budget() {
            return this._budget;
        }

        shopping(array) {
            const typeOfProduct = array.shift();
            const priceOfProduct = Number(array.shift());

            if (priceOfProduct > this.budget) {
                throw new Error('Not enough money to buy this product');
            }

            this.products.push(typeOfProduct);
            this.budget -= priceOfProduct;
            return `You have successfully bought ${typeOfProduct}!`;
        }

        recipes(obj) {
            const productsListArr = obj.productsList;
            productsListArr.forEach(x => {
                if (!this.products.includes(x)) {
                    throw new Error('We do not have this product');
                }
            });
            this.dishes.push(obj);
            return `${obj.recipeName} has been successfully cooked!`;
        }

        inviteGuests(name, dish) {
            const foundDish = this.dishes.find(x => x.recipeName == dish);
            if (!foundDish) {
                throw new Error('We do not have this dish');
            }
            if(this.guests.hasOwnProperty(name)) {
                throw new Error('This guest has already been invited');
            }
            this.guests[name] = dish;
            return `You have successfully invited ${name}!`;
        }

        showAttendance() {
            let arr = [];
            for (let el in this.guests) {
                const foundProducts = this.dishes.find(x => x.recipeName == this.guests[el]);
                arr.push(`${el} will eat ${this.guests[el]}, which consists of ${foundProducts.productsList.join(', ')}`);
            }
            return arr.join('\n');
        }
    }

    let dinner = new ChristmasDinner(300);

    dinner.shopping(['Salt', 1]);
    dinner.shopping(['Beans', 3]);
    dinner.shopping(['Cabbage', 4]);
    dinner.shopping(['Rice', 2]);
    dinner.shopping(['Savory', 1]);
    dinner.shopping(['Peppers', 1]);
    dinner.shopping(['Fruits', 40]);
    dinner.shopping(['Honey', 10]);

    dinner.recipes({
        recipeName: 'Oshav',
        productsList: ['Fruits', 'Honey']
    });
    dinner.recipes({
        recipeName: 'Folded cabbage leaves filled with rice',
        productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
    });
    dinner.recipes({
        recipeName: 'Peppers filled with beans',
        productsList: ['Beans', 'Peppers', 'Salt']
    });

    dinner.inviteGuests('Ivan', 'Oshav');
    dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
    dinner.inviteGuests('Georgi', 'Peppers filled with beans');

    console.log(dinner.showAttendance());

}

christmasDinner();