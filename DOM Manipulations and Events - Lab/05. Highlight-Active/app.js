function focused() {
    let divElement = document.getElementsByTagName('div')[0];
    let inputFields = Array.from(document.getElementsByTagName('input'));
    
    const focus = (e) => {
        const currentDiv = e.target.parentNode;
        currentDiv.classList.add('focused');
    };

    const focusLost = (e) => {
        const currentDiv = e.target.parentNode;
        currentDiv.classList.remove('focused'); 
    };

    for (let el of inputFields) {
        el.addEventListener('focus', focus);
        el.addEventListener('blur', focusLost);
    }
}