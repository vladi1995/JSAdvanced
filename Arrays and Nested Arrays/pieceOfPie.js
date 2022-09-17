function pieceOfPie(arr, one, two) {
    let indexOfOne = arr.indexOf(one);
    let indexOfTwo = arr.indexOf(two);
    let newArr = arr.slice(indexOfOne, indexOfTwo+1);
    return newArr;
}

pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'

);