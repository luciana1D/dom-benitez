/*Nombre del usuario*/
const tareas = [];
const ingreseNombre = () => {
    let n;
    do {
        n = prompt("Ingrese su nombre").toUpperCase();

    } while (n === "");
    return n;
};
let nombre = ingreseNombre();

const saludo = document.createElement("h2");
saludo.innerText = `WELCOME  ${nombre}`;
document.querySelector("#contenedor").append(saludo);
/*Nombre del usuario*/

debugger
function ingresarTarea() {
    let ingresar;
    do {
        ingresar = prompt("Ingresar una tarea").toUpperCase();
    } while (ingresar === "" || ingresar === null);
    tareas.push(ingresar);
    lista();

}

function lista() {
    const listado = document.createElement("ul");
    for (const tarea of tareas) {
        listado.innerHTML = `<li>${tarea}</li>`;
    }
    document.querySelector("#contenedor").append(listado);
    listado.className = "centrado";
    const conteiner = document.querySelector("#contenedor");
    conteiner.className = "contenedor";
    let conf = confirm("Desea agregar otra tarea?");
    if (conf === true) {
        ingresarTarea();
    }
}


let tarea = ingresarTarea();