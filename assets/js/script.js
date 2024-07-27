document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message');
    const emptyErrorMessage = document.querySelector('.empty-error-message-hidden');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function setInvalidStyle(invalid) {
        if (invalid) {
            emailInput.style.outline = '2px solid var(--light-red)';
            emailInput.style.outlineOffset = '2px';
        } else {
            emailInput.style.outline = '';
            emailInput.style.outlineOffset = '';
        }
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = emailInput.value.trim();

        errorMessage.classList.add('error-message-hidden');
        emptyErrorMessage.classList.add('empty-error-message-hidden');
        setInvalidStyle(false);

        if (email === '') {
            emptyErrorMessage.classList.remove('empty-error-message-hidden');
            setInvalidStyle(true);
        } else if (!validateEmail(email)) {
            errorMessage.classList.remove('error-message-hidden');
            setInvalidStyle(true);
        } else {
            // Email is valid, you can submit the form or perform other actions here
            console.log('Valid email:', email);
            // Uncomment the next line to submit the form
            // form.submit();
        }
    });

    // Remove invalid style when user starts typing
    emailInput.addEventListener('input', function() {
        setInvalidStyle(false);
    });
});