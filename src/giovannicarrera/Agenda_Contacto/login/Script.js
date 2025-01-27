document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const correo = document.getElementById('correo');
    const contra = document.getElementById('contra');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const emailValue = correo.value;
        const passwordValue = contra.value;
 
        if (emailValue && passwordValue) {
            sessionStorage.setItem('email', emailValue);
            sessionStorage.setItem('password', passwordValue);

            location.href = '/src/giovannicarrera/Agenda_Contacto/contactos/contactos.html';
        } else {
            alert("Por favor, complete ambos campos.");
        }
    });
});
