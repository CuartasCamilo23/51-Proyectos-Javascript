const numero = document.querySelector(".main_number")

const plusButton = document.querySelector(".plus-button")
const resetButton = document.querySelector(".reset-button")
const lessButton = document.querySelector(".less-button")

function sumar() {
    numero.textContent = Number(numero.textContent) +1;
}
function resetear() {
    numero.textContent = 0;
}
function resta() {
    numero.textContent = Number(numero.textContent) -1;
}

plusButton.addEventListener("click", sumar);
resetButton.addEventListener("click", resetear);
lessButton.addEventListener("click", resta);