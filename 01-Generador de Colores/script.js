const colorCode = document.querySelector(".color-code")

const boxColor = document.querySelector(".container-color")

const buttonChange = document.querySelector(".button-change")

const caracteres = "0123456789ABCDEF";


function concatenacion(){
   
   let resultado ="";

   for (let i=0; i < 6; i++ ){

      resultado = resultado + caracteres[Math.floor(Math.random() * 16)]

   }
   
   return resultado;
}





function cambioColor (){
   const color = "#" + concatenacion();
   boxColor.style.backgroundColor =color;
   colorCode.textContent = color;
}

buttonChange.addEventListener("click", cambioColor)