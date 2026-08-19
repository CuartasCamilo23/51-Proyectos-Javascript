const numero = document.querySelector(".main_number");

const botonPlus = document.querySelector(".plus-button")
const botonLess = document.querySelector(".less-button")
const botonReset = document.querySelector(".reset-button")

function sumar() {
    numero.textContent =  Number(numero.textContent)+1;
}
function resta() {
    numero.textContent = Number(numero.textContent) -1;
}
function resetear(){
    numero.textContent = 0;
}

botonPlus.addEventListener("click", sumar);
botonLess.addEventListener("click", resta)
botonReset.addEventListener("click", resetear)
