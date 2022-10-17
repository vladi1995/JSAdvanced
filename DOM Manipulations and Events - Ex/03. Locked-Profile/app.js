function lockedProfile() {
    let divElements = Array.from(document.getElementsByClassName('profile'));

    for (let el of divElements) {
        let radioElementUnlock = el.children[4];
        let radioElementLock = el.children[2];

        radioElementUnlock.addEventListener('click', () => {
            radioElementUnlock.checked = true;
            radioElementLock.checked = false;
            el.children[10].disabled = false;
        });

        radioElementLock.addEventListener('click', () => {
            radioElementUnlock.checked = false;
            radioElementLock.checked = true;
            el.children[10].disabled = true;
        });

        let btnElement = el.children[10];

        btnElement.addEventListener('click', () => {
            if (radioElementUnlock.checked) {
                if (el.children[10].textContent == 'Hide it') {
                    el.children[9].style.display = 'none';
                    el.children[10].textContent = 'Show more';
                    radioElementLock.checked = true;
                } else {
                    el.children[9].style.display = 'block';
                    el.children[10].textContent = 'Hide it';
                }
            } 
        });
    }
}