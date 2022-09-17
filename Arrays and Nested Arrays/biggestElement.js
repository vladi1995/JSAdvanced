function biggestEl(arrOfArr) {
    let max = arrOfArr[0][0];
    for (let el of arrOfArr) {
        for (let i = 0; i < el.length; i++) {
            if (el[i] >= max) {
                max = el[i];
            }
        }
    }
    return max;
}

biggestEl([[-45, -5, -7, -12],
    [-1, -4, -33, -2],
    [-8, -3, -44, -4]]
   );