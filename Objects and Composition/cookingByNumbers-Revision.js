function cookingBynumbers(num, ...rest) {
    const operationsObj = {
        chop(num) {
            return num/2;
        },
        dice: (num) => Math.sqrt(num),
        spice: (num) => num += 1,
        bake(num) {
            return num*3;
        },
        fillet: function(num) {
            return num*0.8;
        },
    }
    for (let el of rest) {
        num = operationsObj[el](num);
        console.log(num);
    }
}

cookingBynumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');