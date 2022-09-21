function createSortedList() {
    let listOfNum = [];
    let size = 0;
    let obj = {};

    obj = {
        add(a) {
            if (typeof a == 'number') {
                listOfNum.push(a);
                listOfNum.sort((a, b) => a - b);
                obj.size++;
            } else {
                console.log('The array takes only numbers.');
            }
        },
        remove(index) {
            if (index >= 0 && index < listOfNum.length) {
                listOfNum.splice(index, 1);
                listOfNum.sort((a, b) => a - b);
                obj.size--;
            } else {
                console.log('The index is outside the bounds of the array');
            }
        },
        get(index) {
            if (index >= 0 && index < listOfNum.length) {
                return listOfNum[index];
            } else {
                console.log('The index is outside the bounds of the array');
            }
        },
        size,
    }
    return obj;
}
let list = createSortedList();

list.add(18);
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);

