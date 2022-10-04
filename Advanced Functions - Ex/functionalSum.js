function add(num1) {
    let internalSum = num1;

    function inner(num2) {
        internalSum += num2;
        return inner;
    }

    inner.toString = () => {
        return internalSum;
    }
    return inner;
}

console.log(add(1)(6)(-3).toString());