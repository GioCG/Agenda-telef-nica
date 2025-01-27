document.addEventListener('DOMContentLoaded', function() {
    const email = sessionStorage.getItem('email');
    const password = sessionStorage.getItem('password');

    if (email && password) {
        document.getElementById('email-display').textContent = email;
        document.getElementById('password-display').textContent = password;
    } else {
        alert("No se encontraron datos de login.");
        window.location.href = '/login.html';
    }
});
