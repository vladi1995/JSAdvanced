function solve() {
    let selectOptions = document.getElementById('selectMenuTo');
    let elementToCreateDec = document.createElement('option');
    elementToCreateDec.value = 'binary';
    elementToCreateDec.textContent = 'Binary';
    selectOptions.appendChild(elementToCreateDec);

    let elementToCreateHex = document.createElement('option');
    elementToCreateHex.value = 'hexadecimal';
    elementToCreateHex.textContent = 'Hexadecimal';
    selectOptions.appendChild(elementToCreateHex);

    document.querySelector('button').addEventListener('click', clickEvent);

    function clickEvent() {
        let decimalNumber = document.querySelector('#input').value;
        let selectElement = document.querySelector('#selectMenuTo');
        let convertTo = selectElement.options[selectElement.selectedIndex].text;
        let result = document.getElementById('result');

        if(convertTo == 'Binary') {
            let converted = Number(decimalNumber).toString(2);
            result.value = converted;
        } else if(convertTo == 'Hexadecimal') {
            let converted = Number(decimalNumber).toString(16);
            result.value = converted.toUpperCase();
        }
    }
}