function toggle() {
    let hiddenElement = document.getElementById('extra');
    let spanElement = document.getElementsByClassName('button');
   
    if(spanElement[0].textContent == 'More') {
        spanElement[0].textContent = 'Less';
        hiddenElement.style.display = 'block';
    } else {
        spanElement[0].textContent = 'More';
        hiddenElement.style.display = 'none';
    }
}