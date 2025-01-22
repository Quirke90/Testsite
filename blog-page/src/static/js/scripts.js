// src/static/js/scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const subscriptionForm = document.getElementById('subscription-form');
    
    subscriptionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var csrfTokenElement = document.querySelector('input[name="csrf_token"]');
        if (csrfTokenElement) {
            var csrfToken = csrfTokenElement.value;
            console.log('CSRF Token:', csrfToken);
        } else {
            console.error('CSRF token not found');
            return;
        }

        const emailInput = document.getElementById('email');
        if (emailInput) {
            const email = emailInput.value;
            if (validateEmail(email)) {
                // Send the email to the server
                fetch('/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'X-CSRFToken': csrfToken
                    },
                    body: `email=${encodeURIComponent(email)}`
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            } else {
                console.error('Invalid email');
            }
        } else {
            console.error('Email input not found');
        }
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}