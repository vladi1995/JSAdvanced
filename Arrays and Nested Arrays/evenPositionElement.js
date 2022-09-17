function evenPosition(arr) {
    let filteredArr = arr.filter((item) => {
        if (arr.indexOf(item)%2==0) {
            return item;
        }
    });
    console.log(filteredArr.join(' '));
}

evenPosition(['20', '30', '40', '50', '60']);