document.addEventListener('DOMContentLoaded', function() {
    const FormCont = document.getElementById('FormCont');
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const telefono = document.getElementById('telefono');

    FormCont.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const nombreValue = nombre.value;
        const correoValue = correo.value;
        const telefonoValue = telefono.value;

        if (correoValue && telefonoValue && nombreValue) {
            
            location.href = '/src/giovannicarrera/Agenda_Contacto/contactos/contactos.html';
        }
    });
});