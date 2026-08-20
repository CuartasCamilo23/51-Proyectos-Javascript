const colorCode = document.querySelector(".color-code")

const containerColor = document.querySelector(".container-color")

const buttonChange = document.querySelector(".button-change")

const caracteres = "0123456789ABCDEF";

let resultado = "";

function concatenacion() {

   let resultado = "";

   for (let i = 0; i < 6; i++) {
        resultado = resultado + caracteres[Math.floor(Math.random() * 16)];
   }

   return resultado;
}

const color = "#" + concatenacion();

containerColor.style.backgroundColor =color;

function cambiarColor() {

   const color = "#" + concatenacion();

   containerColor.style.backgroundColor = color;

   colorCode.textContent = color;

}

buttonChange.addEventListener("click", cambiarColor);

