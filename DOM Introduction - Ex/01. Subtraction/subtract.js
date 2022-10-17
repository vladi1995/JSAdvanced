function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    let subtr = Number(firstNumber) - Number(secondNumber);
    let result = document.getElementById('result');
    result.textContent = subtr;
}