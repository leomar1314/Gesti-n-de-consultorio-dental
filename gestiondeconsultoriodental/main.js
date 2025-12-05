// FORMULARIO DE CITAS
let formCita = document.getElementById("formCita");

if (formCita) {
    formCita.addEventListener("submit", function(e){
        e.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let fecha = document.getElementById("fecha").value;

        document.getElementById("mensaje").innerText =
            "Gracias " + nombre + ", tu cita para el " + fecha + " fue registrada.";
    });
}

// FORMULARIO DE CONTACTO
let contactoForm = document.getElementById("formContacto");

if (contactoForm) {
    contactoForm.addEventListener("submit", function(e){
        e.preventDefault();

        let nombre = document.getElementById("contactoNombre").value;
        let correo = document.getElementById("contactoCorreo").value;

        document.getElementById("respuestaContacto").innerText =
            "Gracias " + nombre + ", te contactaremos al correo " + correo + ".";
    });
}
