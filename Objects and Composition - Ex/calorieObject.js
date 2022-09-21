function calorieObject(arrOfStrings) {
    let obj = {};
    for (let i = 0; i < arrOfStrings.length; i=i+2) {
        let product = arrOfStrings[i];
        obj[product] = Number(arrOfStrings[i+1]);
    }
    console.log(obj);
}

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);