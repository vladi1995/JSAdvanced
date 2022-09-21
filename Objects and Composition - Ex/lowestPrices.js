function lowestPrices(arrOfStrings) {
    let objOfProducts = {};
    for (const el of arrOfStrings) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);
        if (objOfProducts.hasOwnProperty(product)) {
            if (price < objOfProducts[product].price) {
                objOfProducts[product].town = town;
                objOfProducts[product].price = price;
            }
        } else {
            objOfProducts[product] = {
                town,
                price,
            }
        }
    }
    let entries = Object.entries(objOfProducts);

    for (let [key, value] of entries) {
        console.log(`${key} -> ${value.price} (${value.town})`);
    }
}

/*
function lowestPrices(arrOfStrings) {
    let products = [];
    let obj = {};
    for (const el of arrOfStrings) {
        let [town,product,price] = el.split(' | ');
        price = Number(price);
        let arr = products.filter(x=>x.product==product);
        if (arr.length > 0) {
            obj = arr[0];
            if (obj.price > price) {
                obj.town = town;
                obj.price = price;
            }
        } else {
            obj = {
                town,product,price,
            }
            products.push(obj)
        }
    }
    console.log(products);
}
*/

lowestPrices(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenceToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000',]
);