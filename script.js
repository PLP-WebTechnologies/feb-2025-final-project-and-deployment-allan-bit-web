// Example JavaScript for form validation on contact page
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields before submitting!');
        event.preventDefault(); // Prevent form submission if fields are empty
    }
});
