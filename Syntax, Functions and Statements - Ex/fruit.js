function fruit(strType, numWeight, numPrice) {
    let print = (type, weight, price) => `I need $${((weight*price/1000).toFixed(2))} to buy ${(weight/1000).toFixed(2)} kilograms ${type}.`;
    console.log(print(strType, numWeight, numPrice));
}

fruit('orange', 2500, 1.80);