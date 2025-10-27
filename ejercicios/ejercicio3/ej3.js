/*3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y
 un botón que al ser presionado agregue dicha tarea a una lista, 
cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.  */

//funciones
function agregarTarea(e){
 e.preventDefault();
    const texto=tareaInput.value.trim();
    if(texto!==""){
        //Crear elemento de lista
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.textContent = texto;

        //Crear btn de eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.className = "btn btn-danger";
        btnEliminar.textContent = "Eliminar";

        // Evento eliminar
        btnEliminar.addEventListener("click", () => {
          li.remove();
        });

        // agrega btn al li
        li.appendChild(btnEliminar);

        // agrega li a la lista
        listaTareas.appendChild(li);

        // limoiar input
        tareaInput.value = "";
    }
}



//VARIABLES- Selecciono los elementos del DOM
const btnCargarTarea = document.getElementById("btnCargarTarea");
const tareaInput = document.getElementById("tareaInput");
const listaTareas = document.getElementById("listaTareas");

// Evento para agregar tarea

btnCargarTarea.addEventListener("click",agregarTarea )

