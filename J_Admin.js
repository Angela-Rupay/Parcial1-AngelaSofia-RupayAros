function buscar(event){

event.preventDefault();

let texto = document.getElementById("searchInput").value;

console.log("Búsqueda:", texto);

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


function login(event){

event.preventDefault();

let usuario = document.getElementById("usuario").value;
let password = document.getElementById("password").value;

console.log("Usuario:", usuario);
console.log("Password:", password);

}