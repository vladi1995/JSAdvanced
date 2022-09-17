function biggerHalf(arr) {
    let sorted = arr.sort((a,b)=>a-b);
    let filtered = sorted.filter(el => sorted.indexOf(el) >= Math.floor((sorted.length)/2));
    return filtered;
}

biggerHalf([3, 19, 14, 7, 2, 19, 6]);