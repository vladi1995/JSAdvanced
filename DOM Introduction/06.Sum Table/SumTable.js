function sumTable() {
    let numElements = document.querySelectorAll('table tr td:nth-of-type(2)');
    let arrOfNumElements = Array.from(numElements);
    let sum = 0;

    arrOfNumElements.forEach(el=>{
        sum+=Number(el.textContent);
    });

    let resultElement = document.getElementById('sum');
    resultElement.textContent = sum;
}