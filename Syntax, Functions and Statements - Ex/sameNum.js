function sameNum(num) {
    let numAsStr = num.toString();
    let isNot = 0;
    let sum = 0;
    
    for (let i = 0; i < numAsStr.length; i++) {
        if (numAsStr[i] !== numAsStr[i+1] && i < numAsStr.length-1) {
            isNot = 1;
        }
        sum+=Number(numAsStr[i]);
    }

    (!isNot) ? console.log('true') : console.log('false');
   
    console.log(sum);
}

sameNum(2222222);