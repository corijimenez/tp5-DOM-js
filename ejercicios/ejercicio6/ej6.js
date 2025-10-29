/*Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a
 decrementar el contador.Debe contener los botones, iniciar, pausar y reset. */

const horasInput = document.getElementById("hora");
const minutosInput = document.getElementById("min");
const segundosInput = document.getElementById("seg");

const reloj = document.getElementById("reloj");
const iniciar = document.getElementById("iniciar");
const pausar = document.getElementById("pausar");
const resetear = document.getElementById("resetear");

let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo = null;

function actualizar() {
  if (horas === 0 && minutos === 0 && segundos === 0) {
    clearInterval(intervalo);
    intervalo = null;
    alert("El tiempo ha finalizado! 🫸🏼");
    return;
  }
  if (segundos > 0) {
    segundos--;
  } else {
    segundos = 59;
    if (minutos > 0) {
      minutos--;
    } else {
      minutos = 59;
      horas--;
    }
  }
  let formatoHoras = horas < 10 ? "0" + horas : horas;
  let formatoMinutos = minutos < 10 ? "0" + minutos : minutos;
  let formatoSegundos = segundos < 10 ? "0" + segundos : segundos;

  reloj.textContent =
    formatoHoras + ":" + formatoMinutos + ":" + formatoSegundos;
}

function iniciarTemporizador() {
  if (!intervalo) {
    horas = parseInt(horasInput.value) || 0;
    minutos = parseInt(minutosInput.value) || 0;
    segundos = parseInt(segundosInput.value) || 0;

    intervalo = setInterval(actualizar, 1000);
  }
}
function pausarTemporizador() {
  clearInterval(intervalo);
  intervalo = null;
}

function resetearTemporizador() {
  clearInterval(intervalo);
  intervalo = null;
  horas = 0;
  minutos = 0;
  segundos = 0;
  reloj.textContent = "00:00:00";

  horasInput.value = "";
  minutosInput.value = "";
  segundosInput.value = "";
}

iniciar.addEventListener("click", iniciarTemporizador);
pausar.addEventListener("click", pausarTemporizador);
resetear.addEventListener("click", resetearTemporizador);
