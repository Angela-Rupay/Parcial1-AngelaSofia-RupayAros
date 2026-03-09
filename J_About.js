function buscar(event){

event.preventDefault();

let texto = document.getElementById("searchInput").value;

console.log("Búsqueda:", texto);

}

// CAMBIAR TAMAÑO TEXTO MISIÓN
function cambiarTamano(){

let texto = document.getElementById("textoMision");

let tamañoActual = window.getComputedStyle(texto).fontSize;

if(tamañoActual === "16px"){
texto.style.fontSize = "22px";
}else{
texto.style.fontSize = "16px";
}

}


// CAMBIAR COLOR TEXTO MISIÓN
function cambiarColor(){

let texto = document.getElementById("textoMision");

if(texto.style.color === "red"){
texto.style.color = "black";
}else{
texto.style.color = "red";
}

}


// CAMBIAR TAMAÑO TEXTO VISIÓN
function cambiarTamanoVision(){

let texto = document.getElementById("textoVision");

let tamañoActual = window.getComputedStyle(texto).fontSize;

if(tamañoActual === "16px"){
texto.style.fontSize = "22px";
}else{
texto.style.fontSize = "16px";
}

}


// CAMBIAR COLOR TEXTO VISIÓN
function cambiarColorVision(){

let texto = document.getElementById("textoVision");

if(texto.style.color === "blue"){
texto.style.color = "black";
}else{
texto.style.color = "blue";
}

}

document.addEventListener("DOMContentLoaded", function () {

const enlaces = document.querySelectorAll(".dropdown-item");

enlaces.forEach(enlace => {

enlace.addEventListener("click", function() {

const id = this.getAttribute("href").replace("#","");

const elemento = document.getElementById(id);

const collapse = new bootstrap.Collapse(elemento, {
toggle: true
});

});

});

});