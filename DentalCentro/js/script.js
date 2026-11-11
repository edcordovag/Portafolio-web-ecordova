
document.addEventListener("DOMContentLoaded", function () {

    // GALERÍA DE IMÁGENES
    var imagenes = [
        "img/img01.jpg",
        "img/img02.jpg",
        "img/img03.jpg",
        "img/img04.jpg",
        "img/img05.jpg",
        "img/img06.jpg",
        "img/img07.jpg",
        "img/img08.jpg",
        "img/img09.jpg",
        "img/img010.jpg",
        "img/img011.jpg",
        "img/img012.jpg"
    ];

    var posicion = 0;
    var imagenGaleria = document.getElementById("imagen-galeria");
    var botonAnterior = document.getElementById("anterior");
    var botonSiguiente = document.getElementById("siguiente");

    // FUNCIÓN PARA CAMBIAR LA IMAGEN
    function cambiarImagen() {
        if (!imagenGaleria || imagenes.length === 0) return;

        var nuevaImagen = new Image();

        nuevaImagen.onload = function () {
            imagenGaleria.src = nuevaImagen.src;
        };

        nuevaImagen.onerror = function () {
            console.error("No se encontró la imagen: " + imagenes[posicion]);
        };

        nuevaImagen.src = imagenes[posicion];
    }

    // BOTÓN ANTERIOR
    if (botonAnterior) {
        botonAnterior.addEventListener("click", function () {
            posicion = (posicion - 1 + imagenes.length) % imagenes.length;
            cambiarImagen();
        });
    }

    // BOTÓN SIGUIENTE
    if (botonSiguiente) {
        botonSiguiente.addEventListener("click", function () {
            posicion = (posicion + 1) % imagenes.length;
            cambiarImagen();
        });
    }

    // FORMULARIO DE CONTACTO
    var formulario = document.getElementById("form-contacto");
    var mensajeFormulario = document.getElementById("mensaje-formulario");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            if (mensajeFormulario) {
                mensajeFormulario.textContent =
                    "Gracias por escribirnos. Este formulario es una demostración y todavía no envía datos a un servidor.";
            }

            formulario.reset();
        });
    }

    // PANTALLA DE CARGA
    var preloader = document.getElementById("preloader");

    function ocultarPreloader() {
        if (preloader) {
            preloader.classList.add("oculto");
        }
    }

    if (document.readyState === "complete") {
        ocultarPreloader();
    } else {
        window.addEventListener("load", ocultarPreloader, { once: true });
    }

});
