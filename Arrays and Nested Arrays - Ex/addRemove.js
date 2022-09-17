function addRemove(arr) {
    let arrResult = [];
    let counter = 0;

    for (let el of arr) {
        counter++;
        if (el == 'add') {
            arrResult.push(counter);
        } else {
            arrResult.pop();
        }
    }
    arrResult.length ? console.log(arrResult.join('\n')) : console.log('Empty');;
}

addRemove(['add', 
'add', 
'remove', 
'add', 
'add']


);