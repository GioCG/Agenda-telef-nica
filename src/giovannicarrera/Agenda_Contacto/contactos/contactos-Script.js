document.addEventListener('DOMContentLoaded', function() {
    const email = sessionStorage.getItem('email');

    if (email) {
        document.getElementById('email-display').textContent = email;
    } else {
        alert("No se encontraron datos de login.");
        window.location.href = '/login.html';
    }
});

function guardarDatosUsuario(nombre, correo, telefono) {
    const datosUsuario = {
      nombre: nombre,
      correo: correo,
      telefono: telefono
    }
    localStorage.setItem('usuarioSeleccionado', JSON.stringify(datosUsuario));
  }
  