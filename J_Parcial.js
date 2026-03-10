function cambiarTexto() {

    document.getElementById("descripcion").innerHTML = "Ahora estás viendo nuestras ofertas!";

}

function modoOscuro() {

    if (document.body.style.backgroundColor == "black") {

        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"

    } else {

        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"

    }

}

let carrito = 0

function agregarCarrito() {

    carrito++
    console.log("Productos en carrito: " + carrito)

}

function enviarFormulario(){

let nombre = document.getElementById("nombre").value
let apellidos = document.getElementById("apellidos").value
let edad = document.getElementById("edad").value
let genero = document.getElementById("genero").value
let direccion = document.getElementById("direccion").value
let telefono = document.getElementById("telefono").value
let correo = document.getElementById("correo").value

let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
let regexTelefono = /^[0-9]{7,10}$/

}