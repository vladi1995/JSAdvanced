function wordsUpper(str) {
    let splittedStr = str.split(/\W+/g);
    let newArr = [];

    for (let el of splittedStr) {
        if (el!='') {
            newArr.push(el.toUpperCase());
        }
    }
    console.log(newArr.join(', '));
}

wordsUpper('hello');