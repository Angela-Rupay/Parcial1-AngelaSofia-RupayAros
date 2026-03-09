// BUSCADOR DEL NAVBAR
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



// LOGIN ADMIN
function login(event){

event.preventDefault();

let usuario = document.getElementById("usuario").value;
let password = document.getElementById("password").value;

console.log("Usuario:", usuario);
console.log("Password:", password);

}



// REGISTRO
function registrar(event){

event.preventDefault();

let nombres = document.getElementById("nombres").value.trim();
let apellidos = document.getElementById("apellidos").value.trim();
let email = document.getElementById("email").value.trim();
let telefono = document.getElementById("telefono").value.trim();
let estrato = document.getElementById("estrato").value;
let fecha = document.getElementById("fecha").value;
let sangre = document.getElementById("sangre").value;



// GENERO
let generoSeleccionado = document.querySelector('input[name="genero"]:checked');

if(!generoSeleccionado){
alert("Debe seleccionar un género");
return;
}

let genero = generoSeleccionado.value;



// ACTIVIDADES
let actividadesSeleccionadas = document.querySelectorAll('input[type="checkbox"]:checked');

if(actividadesSeleccionadas.length === 0){
alert("Debe seleccionar al menos una actividad favorita");
return;
}

let actividades = [];

actividadesSeleccionadas.forEach(function(act){
actividades.push(act.value);
});



// EXPRESIONES REGULARES
let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,}$/;
let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let regexTelefono = /^[0-9]{7,10}$/;



// VALIDACIONES
if(!regexNombre.test(nombres)){
alert("Ingrese un nombre válido");
return;
}

if(!regexNombre.test(apellidos)){
alert("Ingrese un apellido válido");
return;
}

if(!regexEmail.test(email)){
alert("Ingrese un email válido");
return;
}

if(!regexTelefono.test(telefono)){
alert("Ingrese un teléfono válido");
return;
}

if(!estrato || estrato < 1 || estrato > 6){
alert("Estrato inválido");
return;
}

if(!fecha){
alert("Debe ingresar fecha de nacimiento");
return;
}

if(sangre === "Select"){
alert("Debe seleccionar grupo sanguíneo");
return;
}



// RESULTADO
alert(
"REGISTRO EXITOSO\n\n"+
"Nombres: "+nombres+
"\nApellidos: "+apellidos+
"\nEmail: "+email+
"\nTeléfono: "+telefono+
"\nEstrato: "+estrato+
"\nFecha nacimiento: "+fecha+
"\nGrupo sanguíneo: "+sangre+
"\nGénero: "+genero+
"\nActividades: "+actividades.join(", ")
);

}