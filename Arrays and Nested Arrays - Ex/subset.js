function subset(arrOfNum) {
    let newArr = [];
    newArr.push(arrOfNum[0]);
    let max = arrOfNum[0];

    for (let i = 0; i < arrOfNum.length-1; i++) {
        if (arrOfNum[i+1]>=max) {
            max = arrOfNum[i+1];
            newArr.push(arrOfNum[i+1]);
        }
    }
    return newArr;
}

subset([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    
    
    )