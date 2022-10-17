function encodeAndDecodeMessages() {
    let messageToEncode = document.querySelector('main#main div textarea[placeholder="Write your message here..."]').value;
    let receiverTextArea = document.querySelector('main#main div textarea[placeholder="No messages..."]');
    let buttonToEncode = Array.from(document.querySelectorAll('main#main div button'));
    let firstButton = buttonToEncode.shift();
    let secondButton = buttonToEncode.shift();

    const encode = (e) => {
        let textareaElement = e.target.parentNode.querySelector('textarea').value;
        let encodedWord = '';
        for (let i = 0; i < textareaElement.length; i++) {
            let currChar = textareaElement[i].charCodeAt(0) + 1;
            encodedWord += String.fromCharCode(currChar);
        }
        receiverTextArea.textContent = encodedWord;
        document.querySelector('main#main div textarea').value = '';
    }

    const decode = (e) => {
        let textareaElement = e.target.parentNode.querySelector('textarea').value;
        let decodedWord = '';
        for (let i = 0; i < textareaElement.length; i++) {
            let currChar = textareaElement[i].charCodeAt(0) - 1;
            decodedWord += String.fromCharCode(currChar);
        }
        receiverTextArea.textContent = decodedWord;
    }

    firstButton.addEventListener('click', encode);
    secondButton.addEventListener('click', decode);
}