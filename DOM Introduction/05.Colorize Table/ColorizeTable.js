function colorize() {
    /*
    let rowElements = document.querySelectorAll('tr:nth-of-type(2n)');
    let arrOfRowElements = Array.from(rowElements);
    arrOfRowElements.forEach(el=>el.style.backgroundColor = 'Teal');
    */
   let rowElements = document.querySelectorAll('table tr');
   let arrOfRowElements = Array.from(rowElements);
   let i = 0;

    arrOfRowElements.forEach((el,i) => {
        if (i%2 != 0) {
            el.style.backgroundColor = 'teal';
        }
    });
}