function solve(arr) {
    let innerCollection = [];
    for (let el of arr) {
        let splArr = el.split(' ');
        if (splArr.includes('add')) {
            add(splArr[1]);
        } else if (splArr.includes('remove')) {
            remove(splArr[1]);
        } else if (splArr.includes('print')) {
            print();
        }
    }
    function add(str) {
        innerCollection.push(str);
    }

    function remove(str) {
        while (innerCollection.includes(str)) {
            innerCollection.splice(innerCollection.indexOf(str),1);
        }
    }

    function print() {
        console.log(innerCollection.join(','));
    }
}

solve(['add hello', 'add again', 'add again', 'remove again', 'add again', 'print']);