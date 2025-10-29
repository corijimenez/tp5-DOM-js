/*Crear una web con un reloj que muestre la siguiente información: dia , mes año,, hora y minuto */


setInterval(()=>{
const fechaActual = new Date()
const opcionesFecha = {
    weekday: 'long', // Muestra el nombre completo del día (ej: Miércoles)
    day: 'numeric',   // Muestra el número del día (ej: 29)
    month: 'long',    // Muestra el nombre completo del mes (ej: Octubre)
    year: 'numeric'   // Muestra el número del año (ej: 2025)
};

const fechaTexto = fechaActual.toLocaleDateString('es-AR', opcionesFecha);

const fecha = document.getElementById('fecha')
const reloj = document.getElementById('reloj')

fecha.textContent  = fechaTexto
reloj.textContent = `${fechaActual.getHours()}: ${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`

    console.log(fechaActual)

} , 1000);

