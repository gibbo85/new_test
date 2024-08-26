// This code will run when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickMeBtn');

    button.addEventListener('click', function() {
        alert('Button Clicked! Thanks for visiting.');
        console.log('Button was clicked.');
    });
});