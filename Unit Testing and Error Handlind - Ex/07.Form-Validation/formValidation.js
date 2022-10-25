function validate() {
    let isCompany = document.getElementById('company');
    let hiddenElement = document.getElementById('companyInfo');
    let inputNumber = document.getElementById('companyNumber');

    isCompany.addEventListener('click', (e) => {
        if (e.target.checked) {
            hiddenElement.style.display = 'block';
        } else {
            hiddenElement.style.display = 'none';
        }
    });

    let submitElement = document.getElementById('submit');

    submitElement.addEventListener('click', (e) => {
        e.preventDefault();
        let inputUsernameElement = document.getElementById('username');
        let patternUsername = /^[\w+]{3,20}/g;

        let inputPasswordElement = document.getElementById('password');
        let inputConfirmPasswordElement = document.getElementById('confirm-password')
        let patternPassword1 = /^[\w+_]{5,15}/g;
        let patternPassword2 = /^[\w+_]{5,15}/g;

        let inputEmailElement = document.getElementById('email');
        let patternEmail = /\w+@\w+.{1,}\w+/g;

        if (patternUsername.test(inputUsernameElement.value)) {
            inputUsernameElement.style.borderColor = '';
        } else {
            inputUsernameElement.style.borderColor = 'red';
        }

        let isok1 = 0;
        let isok2 = 0;
        if (patternPassword1.test(inputPasswordElement.value)) {
            inputPasswordElement.style.borderColor = '';
            isok1 = 1;
        } else {
            inputPasswordElement.style.borderColor = 'red';
        }

        if (patternPassword2.test(inputConfirmPasswordElement.value)) {
            inputConfirmPasswordElement.style.borderColor = '';
            isok2 = 1;
        } else {
            inputConfirmPasswordElement.style.borderColor = 'red';
        }

        if (patternEmail.test(inputEmailElement.value)) {
            inputEmailElement.style.borderColor = '';
        } else {
            inputEmailElement.style.borderColor = 'red';
        }

        if (isok1 && isok2) {
            if (inputConfirmPasswordElement.value == inputPasswordElement.value) {
                inputConfirmPasswordElement.style.borderColor = '';
                inputPasswordElement.style.borderColor = '';
            } else {
                inputConfirmPasswordElement.style.borderColor = 'red';
                inputPasswordElement.style.borderColor = 'red';
            }
        }

        let divResult = document.getElementById('valid');
        let queryAllInputs = Array.from(document.querySelectorAll('input[type="text"], input[type="password"]'));

        let isNotValid = 0;

        for (let el of queryAllInputs) {
            if (el.style.borderColor == 'red') {
                isNotValid = 1;
            }
        }

        if (hiddenElement.style.display == 'block') {
            if (inputNumber.value >= 1000 && inputNumber.value <= 9999) {
                inputNumber.style.borderColor = '';
            } else {
                inputNumber.style.borderColor = 'red';
                isNotValid = 1;
            }
        } else {
            inputNumber.style.borderColor = '';
            inputNumber.value = '';
        }

        if (isNotValid) {
            divResult.style.display = 'none';
        } else {
            divResult.style.display = 'block';
            isNotValid = 0;
        }

    });
}

