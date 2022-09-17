function negPos(arr) {
    let newArr = [];
    for (let el of arr) {
        if (el < 0) {
            newArr.unshift(el);
        } else {
            newArr.push(el);
        }
    }
    console.log(newArr.join('\n'));
}

negPos([3, -2, 0, -1]);