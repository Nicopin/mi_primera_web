let miNombre = "Nicolas Pinzon Giraldo";
console.log(miNombre);

let contenidoTitulo = "Cambia";
let titulo = document.querySelector('#encabezado .logo a');
if (contenidoTitulo == "Cambio") {
    titulo.innerHTML = '<i class="fa-solid fa-house"></i>' + contenidoTitulo
} else {
    console.log("Condicion Incumplida.");
}

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";

    if (nombre.value.length < 4) {
        warnings += `El nombre debe contener más de 4 carcateres.`;
        valido = false;
    }

    if (!valido) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado.";
    }
    return valido;
}

form.addEventListener("submit", (e) => {
    if (validarFormulario()) {
        formulario.submit();
    } else {
        e.preventDefault();
    }
});