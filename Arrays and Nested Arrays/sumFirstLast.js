function sum(arr) {
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    return first+last;
}

sum(['5', '10']);