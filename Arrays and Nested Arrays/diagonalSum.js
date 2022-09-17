function diagonalSum(arrOfArr) {
    arrOfArr.map(Number);
    let lenOfArr = arrOfArr.length;
    let mainDiag = [];
    let secondaryDiag = [];
    let mainSum = 0;
    let secondarySum = 0;

    function diagSum(arrToReduce) {
        return arrToReduce.reduce((acc, currValue) => acc+currValue, 0);
    }

    for (let i = 0; i < lenOfArr; i++) {
        for (let j = 0; j < lenOfArr; j++) {
            if (i == j) {
                mainDiag.push(arrOfArr[i][j]);
            }
            if (i+j == lenOfArr-1) {
                secondaryDiag.push(arrOfArr[i][j]);  
            }
        }
    }
    mainSum = diagSum(mainDiag);
    secondarySum = diagSum(secondaryDiag);
    console.log(mainSum + ' ' + secondarySum);
}

diagonalSum([[1, 2, 3, 4, 5],
             [6, 7, 8, 9, 10],
             [11, 12, 13, 14, 15],
             [16, 17, 18, 19, 20],
             [21, 22, 23, 24, 25]]   
   );

diagonalSum([[-1,0],
    [0,-1]]   
);

diagonalSum([[1, 2, 3, 4, 5, 5],
             [6, 7, 8, 9, 10, 5],
             [11, 12, 13, 14, 15, 5],
             [16, 17, 18, 19, 20, 5],
             [21, 22, 23, 24, 25, 5],
             [26, 27, 28, 29, 30, -5]
]   
);