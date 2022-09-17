function rotateArray(arrOfStrings, num) {
    while (num > 0) {
        let lastElement = arrOfStrings.pop();
        arrOfStrings.unshift(lastElement);
        num--;
    }
    console.log(arrOfStrings.join(' '));
}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

)