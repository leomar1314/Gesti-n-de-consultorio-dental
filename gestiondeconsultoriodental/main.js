

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('citaForm');
  const mensaje = document.getElementById('mensaje');
  const nombreInput = document.getElementById('nombre');
  const telefonoInput = document.getElementById('telefono');
  const especialidadSelect = document.getElementById('especialidad');

  form.addEventListener('submit', function (event) {
    event.preventDefault();


    const nombre = nombreInput.value.trim();
    const telefono = telefonoInput.value.trim();
    const especialidad = especialidadSelect.value;

   
    if (!nombre || !telefono || !especialidad) {
      mensaje.textContent = 'Error: Por favor, complete todos los campos requeridos.';
      mensaje.style.color = 'red';
      return;
    }

    
    const numeros = telefono.replace(/\D/g, ''); 
    if (numeros.length < 8) {
      mensaje.textContent = 'Error: El número de teléfono parece incompleto.';
      mensaje.style.color = 'red';
      return;
    }

   
    mensaje.style.color = 'green';
    mensaje.textContent = `¡Solicitud enviada! ${nombre}, con teléfono ${telefono}, confirmaremos su cita de ${especialidad} pronto.`;

    
    form.reset();

   
  });
});