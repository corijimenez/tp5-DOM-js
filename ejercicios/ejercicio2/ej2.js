/*2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
 Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada 
y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, 
permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es
 “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

 */

class Persona {
  #nombre;
  #edadd;
  #DNI;
  #sexo = ["H", "M"];
  #peso;
  #altura;
  #anioNacimiento;
  constructor(
    nombre,
    edad,
    DNI,
    sexo,
    peso,
    altura,
    anioNacimiento,
    generacion,
    rasgo
  ) {
    this.#nombre = nombre;
    this.#edadd = edad;
    this.#DNI = DNI;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#anioNacimiento = anioNacimiento;
    this.generacion = generacion;
    this.rasgo = rasgo;
  }

  getNombre() {
    return this.#nombre;
  }
  getEdad() {
    return this.#edadd;
  }
  getDNI() {
    return this.#DNI;
  }
  getSexo() {
    return this.#sexo;
  }
  getPeso() {
    return this.#peso;
  }
  getAltura() {
    return this.#altura;
  }
  getAnioNacimiento() {
    return this.#anioNacimiento;
  }
  getGeneracion() {
    return this.generacion;
  }
  getRasgo() {
    return this.rasgo;
  }

  setGeneracion(nuevaGeneracion) {
    this.generacion = nuevaGeneracion;
  }
  setRasgo(nuevoRasgo) {
    this.rasgo = nuevoRasgo;
  }

 mostrarGeneracion() {
    let generacion, rasgo;

    if (this.#anioNacimiento >= 1994 && this.#anioNacimiento <= 2010) {
      generacion = "Generación Z";
      rasgo = "Irreverencia";
    } else if (this.#anioNacimiento >= 1981 && this.#anioNacimiento <= 1993) {
      generacion = "Generación Y (Millennials)";
      rasgo = "Frustración";
    } else if (this.#anioNacimiento >= 1969 && this.#anioNacimiento <= 1980) {
      generacion = "Generación X";
      rasgo = "Obsesión por el éxito";
    } else if (this.#anioNacimiento >= 1949 && this.#anioNacimiento <= 1968) {
      generacion = "Baby Boom";
      rasgo = "Ambición";
    } else if (this.#anioNacimiento >= 1930 && this.#anioNacimiento <= 1948) {
      generacion = "Silent Generation";
      rasgo = "Austeridad";
    } else {
      generacion = "Fuera de rango";
      rasgo = "Desconocido";
    }

    return `Pertenece a la ${generacion}. Rasgo característico: ${rasgo}.`;
  }

 esMayorDeEdad() {
    return this.#edadd >= 18
      ? `${this.#nombre} es MAYOR de edad ✅`
      : `${this.#nombre} es MENOR de edad ❌`;
  }

}
//---------------variables---------------
const formulario = document.getElementById("formulario")
const resultado = document.getElementById("resultado")
const botones = document.getElementById("botonesAccion")
const btnGeneracion = document.getElementById("btnGeneracion")
const btnMayor = document.getElementById("btnMayor")
const btnSalir = document.getElementById("btnSalir")
let persona =null

/*botones */
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const DNI = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const anioNacimiento = parseInt(
    document.getElementById("anio").value
  );

  persona = new Persona(
    nombre,
    edad,
    DNI,
    sexo,
    peso,
    altura,
    anioNacimiento
  );
botones.classList.remove("d-none");
  resultado.classList.remove("d-none");
  resultado.innerHTML = `<div class="alert alert-success">Persona creada con exito! Que desea Saber? </div>`;
});


btnGeneracion.addEventListener("click", () => {
  resultado.innerHTML = `<div class="alert alert-info">${persona.mostrarGeneracion()}</div>`;
});

btnMayor.addEventListener("click", () => {
  resultado.innerHTML = `<div class="alert alert-success">${persona.esMayorDeEdad()}</div>`;
});

btnSalir.addEventListener("click", () => {
  persona = null;
  formulario.reset();
  botones.classList.add("d-none");
  resultado.classList.add("d-none");
});
