/*Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.gast */
let reloj = document.getElementById("reloj");
let iniciar = document.getElementById("iniciar");
let pausar = document.getElementById("pausar");
let resetear = document.getElementById("resetear");

let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

function actualizar() {
  segundos++;
    if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
    }
    let formatoHoras = horas < 10 ? "0" + horas : horas;
    let formatoMinutos = minutos < 10 ? "0" + minutos : minutos;
    let formatoSegundos = segundos < 10 ? "0" + segundos : segundos;

    reloj.textContent = formatoHoras + ":" + formatoMinutos + ":" + formatoSegundos;

}

function iniciarR() {
  if (!intervalo) {
    intervalo = setInterval(actualizar, 1000);
  }
}
function pausarR() {
    clearInterval(intervalo);
    intervalo = null;
}

function resetearR() {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    minutos = 0;
    horas = 0;
    reloj.textContent = "00:00:00";
}   

iniciar.addEventListener("click", iniciarR);
pausar.addEventListener("click", pausarR);
resetear.addEventListener("click", resetearR);
