function divisor(num1, num2) {
    /*
    let minNum = Math.min(num1, num2);
    let arr = [];

    for (let i = 1; i <= minNum; i++) {
        if (num1%i == 0 && num2%i == 0) {
            arr.push(i);
        }
    }

    console.log(arr[arr.length-1]);
    */

    let result = function (num1, num2) {
        while (num1 !== num2) {
            if (num1 > num2) {
                num1 -= num2;
            } else {
                num2 -= num1;
            }
        }
        return num1;
    }
    console.log(result(num1,num2));
}

divisor(20, 28);