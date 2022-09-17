function lastK(n, k) {
    let arr = [];
    arr.push(1)
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum = 0;
        if (i <= k) {
            for (let j = 1; j <= k; j++) {
                if (j <= i) {
                    sum += arr[j - 1];
                }
            }
        } else {
            for (let j = i - k; j < i; j++) {
                sum += arr[j];
            }
        }
        arr.push(sum);
    }
    return arr;
}

lastK(8, 2);