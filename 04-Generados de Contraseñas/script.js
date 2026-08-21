const contraseña = document.querySelector(".password")

const button = document.querySelector(".button")

const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generarContraseña() {

    let valores = "";

        for (let i = 0; i < 8; i++ ){
            valores = valores + caracteres[Math.floor(Math.random() * caracteres.length)]
        }
        return valores
}

function cambioContraseña(){
    contraseña.textContent = generarContraseña()
}


button.addEventListener("click", cambioContraseña)