function equalNeighbours(arrOfArr) {
    let count = 0;
    for (let i = 0; i < arrOfArr.length; i++) {
        for (let j = 0; j < arrOfArr[0].length; j++) {
            if (i < arrOfArr.length - 1) {
                if ((arrOfArr[i + 1][j] == arrOfArr[i][j])) {
                    count++;
                }
                if ((arrOfArr[i][j + 1] == arrOfArr[i][j])) {
                    count++;
                }
            } else {
                if (arrOfArr[i][j + 1] == arrOfArr[i][j]) {
                    count++;
                }
            }
        }
    }
    //console.log(count);
    return count;
}

equalNeighbours([['2', '2', '5', '7', '4'],
                ['4', '0', '5', '3', '4'],
                ['2', '5', '5', '4', '2']]
);