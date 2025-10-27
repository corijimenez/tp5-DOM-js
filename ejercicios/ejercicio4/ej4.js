/*Crear una web con un reloj que muestre la siguiente información: dia , mes año,, hora y minuto */

//funcion para actualizar el reloj
function actualizarReloj() {
    const ahora = new Date();
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaStr = ahora.toLocaleDateString(undefined, opcionesFecha);
    const horaStr = ahora.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
    relojElemento.textContent = `${fechaStr} - ${horaStr}`;
}

//VARIABLES - selecciono el elemento del DOM
const relojElemento = document.getElementById("reloj");
//Actualizar el reloj cada minuto
setInterval(actualizarReloj, 60000);
//Llamar a la funcion para mostrar la hora al cargar la pagina
actualizarReloj();
