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