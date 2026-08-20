const input = document.querySelector(".input");

const button = document.querySelector(".button-añadir");

const containerTareas = document.querySelector(".container-tareas");


function agregarTarea() {

    if (input.value.length > 0){
        const tarea = document.createElement("p");
        tarea.textContent = input.value;
        containerTareas.appendChild(tarea);
    }
}

button.addEventListener("click", agregarTarea)


    
