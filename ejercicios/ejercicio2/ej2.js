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
    let nuevaGeneracion = "";
    let nuevoRasgo = "";

    if (this.#anioNacimiento >= 1994 && this.#anioNacimiento <= 2010) {
      nuevaGeneracion = "Generación Z";
      nuevoRasgo = "Irreverencia";
    } else if (this.#anioNacimiento >= 1981 && this.#anioNacimiento <= 1993) {
      nuevaGeneracion = "Generación Y (Millennials)";
      nuevoRasgo = "Frustración";
    } else if (this.#anioNacimiento >= 1969 && this.#anioNacimiento <= 1980) {
      nuevaGeneracion = "Generación X";
      nuevoRasgo = "Obsesión por el éxito";
    } else if (this.#anioNacimiento >= 1949 && this.#anioNacimiento <= 1968) {
      nuevaGeneracion = "Baby Boom";
      nuevoRasgo = "Ambición";
    } else if (this.#anioNacimiento >= 1930 && this.#anioNacimiento <= 1948) {
      nuevaGeneracion = "Silent Generation";
      nuevoRasgo = "Austeridad";
    } else {
      nuevaGeneracion = "Fuera de rango";
      nuevoRasgo = "Desconocido";
    }
    this.setGeneracion(nuevaGeneracion);
    this.setRasgo(nuevoRasgo);
    console.log(`Pertenece a la ${nuevaGeneracion}`);
    console.log(`Rasgo característico: ${nuevoRasgo}`);
  }

  esMayorDeEdad() {
    let mensaje;
    if (this.#edadd >= 18) {
      mensaje = `${this.#nombre} es mayor de edad ✅`;
    } else {
      mensaje = `${this.#nombre} es menor de edad ❌`;
    }
    console.log(mensaje);
    return mensaje;
  }

  mostrarDatos() {
    console.log("---- Datos de la persona ----");
    console.log(`Nombre: ${this.#nombre}`);
    console.log(`Edad: ${this.#edadd}`);
    console.log(`DNI: ${this.#DNI}`);
    console.log(`Sexo: ${this.#sexo}`);
    console.log(`Peso: ${this.#peso} kg`);
    console.log(`Altura: ${this.#altura} m`);
    console.log("-----------------------------");

    document.writeln("<h3>Datos de la persona: </h3>");
    document.writeln("<hr>");
    document.writeln(`<p>Nombre: ${this.#nombre}</p>`);
    document.writeln(`<p>Edad: ${this.#edadd}</p>`);
    document.writeln(`<p>DNI: ${this.#DNI}</p>`);
    document.writeln(`<p>Sexo: ${this.#sexo}</p>`);
    document.writeln(`<p>Año de Nacimiento: ${this.#anioNacimiento}</p>`);
    document.writeln(`<p>Generación: ${this.generacion}</p>`);
    document.writeln(`<p>Rasgo: ${this.rasgo}</p>`);
  }
}
/*funciones */
function ingresarDatos(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const DNI = document.getElementById("DNI").value;
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const anioNacimiento = parseInt(document.getElementById("anioNacimiento").value);
    const persona = new Persona(
      nombre,
      edad, 
        DNI,
        sexo,
        peso,
        altura,
        anioNacimiento
    );
    persona.mostrarGeneracion();
    alert(persona.esMayorDeEdad());
    persona.mostrarDatos();
}
const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', ingresarDatos);

