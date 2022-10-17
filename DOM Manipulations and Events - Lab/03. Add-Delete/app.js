function addItem() {
    let newText = document.getElementById('newItemText');
    let ulSelected = document.getElementById('items');
    let newLiElement = document.createElement('li');
    let newAElement = document.createElement('a');

    newAElement.textContent = '[Delete]';
    newAElement.href = '#';
    newLiElement.textContent = newText.value;

    newLiElement.appendChild(newAElement);
    ulSelected.appendChild(newLiElement);

    newAElement.addEventListener('click', deleteElement);

    function deleteElement(e) {
        const target = e.currentTarget;
        target.parentNode.remove();
        //newLiElement.remove();
    }
    newText.value = '';
}