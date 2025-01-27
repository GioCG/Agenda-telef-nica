const usuarioSeleccionado = JSON.parse(localStorage.getItem('usuarioSeleccionado'));

if (usuarioSeleccionado) {
  document.getElementById('nombre-usuario').textContent = usuarioSeleccionado.nombre;
  document.getElementById('correo-usuario').textContent = usuarioSeleccionado.correo;
  document.getElementById('telefono-usuario').textContent = usuarioSeleccionado.telefono;
} else {
  document.getElementById('detalle-usuario').textContent = 'No se encontraron datos del usuario.';
}