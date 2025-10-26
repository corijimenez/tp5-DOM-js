/*1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego,
 en ese momento se crea un número aleatorio que el usuario deberá adivinar,
  la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, 
  al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico,
   si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */

// ------------FUNCIONES-------------------


function generarNumeroMagico() {
return Math.floor(Math.random() * 100) + 1;
}

function iniciarJuego() {
    numeroMagico = generarNumeroMagico(); 
    console.log("NUMERO MAGICO:", numeroMagico);
    alert("🎮 ¡El juego ha comenzado! Ingresa un número del 1 al 100.");
    numero.value = ""; // limpia el input 
    }

function verificarNumero() {
    const numeroIngresado = parseInt(numero.value);

    if (isNaN(numeroIngresado)) {
        alert("⚠️ Por favor, ingresa un número válido.");
    return;
    }

    if (numeroIngresado === numeroMagico) {
        mostrarConfeti();
        alert("🎉 ¡Felicitaciones! Adivinaste el número mágico 🎉");
        reiniciarJuego();
      } else if (numeroIngresado > numeroMagico) {
        alert("El número ingresado es MAYOR al número mágico.");
      } else {
        alert("El número ingresado es MENOR al número mágico.");
      }

      numero.value = ""; 
    }




function mostrarConfeti() {
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 }
  });
}
function reiniciarJuego() {
    alert("🔄 El juego ha sido reiniciado. Presiona 'Comenzar Juego' para jugar de nuevo.");
  }


//-------------variebles----------------
let numeroMagico;
const btnComenzar = document.getElementById('btnComenzar');
const btnEnviar = document.getElementById('btnEnviar');
const numero = document.getElementById('input');
    
// --------------EVENTOS---------------------    
    btnComenzar.addEventListener('click', iniciarJuego);
    btnEnviar.addEventListener('click', verificarNumero);

