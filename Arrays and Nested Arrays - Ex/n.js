function printN(arrOfStrings, num) {
    let filtered = arrOfStrings.filter((el, i) => i%num == 0);
    return filtered;
}

printN(['1', 
'2',
'3', 
'4', 
'5'], 
6


);