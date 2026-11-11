// Interacción simple con JavaScript
var botonMensaje = document.getElementById("btnMensaje");
var textoMensaje = document.getElementById("mensaje");

function mostrarMensaje() {
    textoMensaje.textContent = "¡Bienvenido al portafolio de Soporte TI y Desarrollo Web de Eduardo Cordova!";
}

if (botonMensaje) {
    botonMensaje.addEventListener("click", mostrarMensaje);
}