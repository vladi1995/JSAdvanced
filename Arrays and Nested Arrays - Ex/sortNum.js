function sortNum(arrOfNum) {
    let sorted = arrOfNum.sort((a,b)=>a-b);
    let leftHalf = sorted.slice(0,Math.ceil(sorted.length/2));
    let rightHalf = sorted.slice(Math.ceil(sorted.length/2), sorted.length).reverse();
    let maxHalf = Math.max(leftHalf.length, rightHalf.length);
    let newArr = [];

    for (let i = 0; i < maxHalf; i++) {
        newArr.push(leftHalf[i]);
        if (rightHalf[i] != undefined) {
            newArr.push(rightHalf[i]);
        }
    }

    return newArr;
}

sortNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);