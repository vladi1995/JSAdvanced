function validate() {
    let emailElement = document.getElementById('email');
    
    const validateEmail = function(e) {
        let pattern = /^[a-z]+@[a-z]+[\.][a-z]+$/;
        let currentInput = e.target.value;
        let match = currentInput.match(pattern);
        if (match != null) {
            if (match[0] != currentInput) {
                e.target.classList.add('error');
            } else {
                e.target.classList.remove('error');
            }
        } else {
            e.target.classList.add('error');
        }
    }

    emailElement.addEventListener('change', validateEmail);
}