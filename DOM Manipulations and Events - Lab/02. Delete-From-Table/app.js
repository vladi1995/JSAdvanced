function deleteByEmail() {
    let emailElement = document.querySelector('input[name="email"]');
    let elementsInTable = Array.from(document.querySelectorAll('tbody tr td:nth-of-type(2)'));
    let resultElement = document.getElementById('result');

    elementsInTable.forEach(el=>{
        if (el.textContent == emailElement.value) {
            el.parentNode.remove();
            resultElement.textContent = 'Deleted.';
        } else {
            resultElement.textContent = 'Not found.';
        }
    });
    //emailElement.value = '';
}