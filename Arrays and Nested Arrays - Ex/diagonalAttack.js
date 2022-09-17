function diagonalAttack(arrOfStrings) {
    let finalMatrix = [];
    let sumMain = 0;
    let sumSecondary = 0;
    for (let el of arrOfStrings) {
        let splitted = el.split(' ').map(Number);
        finalMatrix.push(splitted);
    }

    for (let i = 0; i < finalMatrix.length; i++) {
        for (let j = 0; j < finalMatrix[0].length; j++) {
            if (i == j) {
                sumMain += finalMatrix[i][j];
            }
            if (i == finalMatrix.length - 1 - j) {
                sumSecondary += finalMatrix[i][j];
            }
        }
    }

    if (sumMain == sumSecondary) {
        for (let i = 0; i < finalMatrix.length; i++) {
            for (let j = 0; j < finalMatrix[0].length; j++) {
                if (i != j) {
                    if (i != finalMatrix.length - 1 - j) {
                        finalMatrix[i][j] = sumMain;
                    }
                }
            }
        }
    }
    finalMatrix.forEach(el => {
        console.log(el.join(' '));
    })
}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
)