// src/static/js/scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const subscriptionForm = document.getElementById('subscription-form');
    
    subscriptionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const emailInput = document.getElementById('email');
        const email = emailInput.value;

        if (validateEmail(email)) {
            // Send the email to the server
            fetch('/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            })
            .then(response => {
                if (response.ok) {
                    alert('Thank you for subscribing!');
                    emailInput.value = '';
                } else {
                    alert('There was an error. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error. Please try again.');
            });
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});