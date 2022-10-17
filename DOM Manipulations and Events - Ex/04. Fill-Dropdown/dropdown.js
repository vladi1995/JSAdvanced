function addItem() {
    let newItemTextElement = document.getElementById('newItemText');
    let newItemValueElement = document.getElementById('newItemValue');

    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = newItemTextElement.value;
    newOptionElement.value = newItemValueElement.value;
    let selectElement = document.getElementById('menu');
    selectElement.appendChild(newOptionElement);

    newItemTextElement.value = '';
    newItemValueElement.value = '';
}