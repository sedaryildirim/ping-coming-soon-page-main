document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const setInvalidStyle = (invalid) => {
        emailInput.style.border = invalid ? '2px solid var(--light-red)' : '1px solid var(--pale-blue)';
    };

    const showError = (message) => {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        setInvalidStyle(true);
    };

    const hideError = () => {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
        setInvalidStyle(false);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (email === '') {
            showError('Whoops! It looks like you forgot to add your email');
        } else if (!validateEmail(email)) {
            showError('Please provide a valid email address');
        } else {
            // Email is valid, you can submit the form or perform other actions here
            console.log('Valid email:', email);
            // Uncomment the next line to submit the form
            // form.submit();
            
            // Reset form and styles
            form.reset();
            hideError();
        }
    });

    emailInput.addEventListener('input', hideError);
});