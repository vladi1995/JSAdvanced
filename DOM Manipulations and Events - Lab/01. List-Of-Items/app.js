function addItem() {
    let textToAdd = document.getElementById('newItemText');
    let elementToAppend = document.getElementById('items');
    let newLiElement = document.createElement('li');
    newLiElement.textContent = textToAdd.value;
    elementToAppend.appendChild(newLiElement);
}