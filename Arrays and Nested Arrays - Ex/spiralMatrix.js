function spiralMatrix(x, y) {
    let spiralMatrix = [...Array(x)].map(x => Array(y).fill(0));
    let startRow = 0;
    let startCol = 0;
    let endRow = x-1;
    let endCol = y-1;
    let counter = 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            spiralMatrix[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            spiralMatrix[i][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            spiralMatrix[endRow][i] = counter;
            counter++
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            spiralMatrix[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    
    spiralMatrix.forEach(el => console.log(el.join(' ')));
}

spiralMatrix(5, 5);