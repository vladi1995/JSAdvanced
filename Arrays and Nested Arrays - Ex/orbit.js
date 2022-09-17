function orbit(arrOfNum) {
    let rows = arrOfNum[0];
    let cols = arrOfNum[1];
    let xStar = arrOfNum[2];
    let yStar = arrOfNum[3];

    let newMatrix = [];
    for (let i = 0; i < rows; i++) {
        newMatrix.push([]);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            newMatrix[i][j]=(Math.max(Math.abs(i-xStar), Math.abs(j-yStar))+1);
        }
    }
    newMatrix.forEach(el=>console.log(el.join(' ')));
}

orbit([4, 4, 0, 0]);