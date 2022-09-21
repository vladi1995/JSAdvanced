function jansNotation(arrOfInput) {
    let arrOfResult = [];

    const operandAction = (a,b,sign) => {
        if (sign == '+') return a+b;
        else if (sign == '-') return a-b;
        else if (sign == '*') return a*b;
        else if (sign == '/') return a/b;
    }

    const operation = (objToOperate) => {
        let ab = objToOperate.arr;
        let toParse = ab.slice(-2);
        let operand = objToOperate.operation;
        let result = operandAction(toParse[0], toParse[1], operand);
        return result;
    }

    for (let el of arrOfInput) {
        if (typeof el == 'number') {
            arrOfResult.push(el);
        } else {
            const objToOperate = {
                arr: arrOfResult.slice(-2),
                operation: el,
            }
            arrOfResult.splice(-2);
            arrOfResult.splice(arrOfResult.length, 0, operation(objToOperate));
        }
    }

    if (arrOfResult.length > 1) {
        console.log('Error: too many operands!');
    } else if (arrOfResult.includes(NaN)) {
      console.log('Error: not enough operands!');  
    } else {
        console.log(arrOfResult[arrOfResult.length-1]);
    }
}

jansNotation([15,2,2,'/']);