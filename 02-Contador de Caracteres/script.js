const input = document.querySelector(".input");

const numeroCaracter = document.querySelector(".numero-caracter");

function contarCaracteres(){
    const valor = input.value.length;
    numeroCaracter.textContent = valor;
}


input.addEventListener("input", contarCaracteres)

