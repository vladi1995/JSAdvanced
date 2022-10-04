function solution(num) {
    let firstNumber = num;

    return function (nextNumber) {
        return firstNumber + nextNumber;
    }
}

function solution(num) {
    function add(a, b) {
        return a+b;
    }

    return add.bind(this, number);
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
console.log(add7(3));

