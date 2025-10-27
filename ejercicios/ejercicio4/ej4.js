/*Crear una web con un reloj que muestre la siguiente información: dia , mes año,, hora y minuto */

setInterval(()=>{
    const fecha = new Date()
    console.log(fecha)
    const reloj = document.getElementById('reloj')
    reloj.textContent = `${fecha.getHours()}: ${fecha.getMinutes()}:${fecha.getSeconds()}`
} , 1000);
