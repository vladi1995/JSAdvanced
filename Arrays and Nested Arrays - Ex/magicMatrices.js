function magicMatrices(arr) {
    let sumRows = 0;
    let sumCols = 0;
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        sumRows = 0;
        sumCols = 0;
        arr[i].forEach(element => {
            sumRows+=element;
        });
        resultArr.push(sumRows);
        for (let j = 0; j < arr.length; j++) {
            sumCols+=arr[j][i];
        }
        resultArr.push(sumCols);
    }
    
    function allEqual (resultArr) {
        let result = resultArr.every((el) => {
            if (el == resultArr[0]) {
                return true;
            }
        });
        return result;
    }
    console.log(allEqual(resultArr));
}

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   
   
   );