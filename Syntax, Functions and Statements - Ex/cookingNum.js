function cookingNum(numStr, com1, com2, com3, com4, com5) {
    let num = Number(numStr);
    let arrOfCommands = [com1, com2, com3, com4, com5];

    let chop = (num) => num/2;
    let dice = (num) => Math.sqrt(num);
    let spice = (num) => num+1;
    let bake = (num) => num*3;
    let fillet = (num) => num*0.8;
    
    for (let i = 0; i < 5; i++) {
        let command = arrOfCommands[i];
        switch (command) {
            case 'chop':
                num=chop(num);
                break;
            case 'dice':
                num=dice(num);
                break;
            case 'spice':
                num=spice(num);
                break;
            case 'bake':
                num=bake(num);
                break;
            case 'fillet':
                num=fillet(num);
                break;
        }
        if (Number.isInteger(num)) {
            console.log(num);
        } else {
            console.log(num.toFixed(1));
        }
    }
}

cookingNum('9', 'dice', 'spice', 'chop', 'bake', 'fillet');