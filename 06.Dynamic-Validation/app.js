function validate() {
    let inputElement = document.getElementById('email');
    let patternEmail = /[a-z]+@[a-z]+\.[a-z]+/g;

    inputElement.addEventListener('change', (e) => {
        if (!patternEmail.test(e.target.value)) {
            console.log(1);
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    });
}