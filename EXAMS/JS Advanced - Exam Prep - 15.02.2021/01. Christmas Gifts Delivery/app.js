function solution() {
    const firstSection = document.querySelector('.card');
    firstSection.querySelector('button').addEventListener('click', onSend);
    const inputText = document.querySelector('input');
    let arr = [];

    function onSend(event) {
        const ulElement = document.querySelector('ul');
        ulElement.innerHTML = '';
        arr.push(inputText.value);
        arr = arr.sort((a, b) => a.localeCompare(b));

        arr.forEach(x => {
            const btnSend = document.createElement('button');
            btnSend.id = 'sendButton';
            btnSend.textContent = 'Send';

            const btnDiscard = document.createElement('button');
            btnDiscard.id = 'discardButton';
            btnDiscard.textContent = 'Discard';

            const element = el('li', { className: 'gift' }, x,
                btnSend, btnDiscard);

            btnSend.addEventListener('click', sendElement.bind(null, element, x, a = 1));
            btnDiscard.addEventListener('click', sendElement.bind(null, element, x, a = 2));
            ulElement.appendChild(element);
        });
        inputText.value = '';
    }

    function sendElement(element, inputText, a) {
        element.remove();
        arr.splice(arr.indexOf(inputText),1);
        let ulElement = null;
        if (a == 1) {
            ulElement = document.querySelectorAll('ul')[1];
        } else if (a == 2) {
            ulElement = document.querySelectorAll('ul')[2];
        }
        const sendEl = el('li', { className: 'gift' }, inputText);
        ulElement.appendChild(sendEl);
    }

    function el(type, attr, ...content) {
        const newElement = document.createElement(type);

        for (let el in attr) {
            newElement[el] = attr[el];
        }

        for (let el of content) {
            if (typeof el == 'string' || typeof el == 'number') {
                el = document.createTextNode(el);
            }
            newElement.appendChild(el);
        }
        return newElement;
    }
}