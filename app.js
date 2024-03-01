
//Modificar el DOM
//Lineas de codigo ineficientes 
// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Juego del número secreto"; // insertar codigo 


// let parrafo = document.querySelector("p");
// parrafo.innerHTML = "Escoge un numero del 1 al 10"

// Eventos (Interacción)
let numeroSecreto = generaciónNumeroSecreto();
let intentos = 1;
//Onclick (en) ---> codigo js 
function intentoDeUsuario(params) {
    alert("Click desde el botón")
}



//Función para ahorrar lineas de codigo (optimizar)
function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del Número secreto")
    asignarTextoElemento("p", "Escoge un numero del 1 al 10")
    numeroSecreto = generaciónNumeroSecreto();
    intentos = 1;
}    




function generaciónNumeroSecreto() {
    return  Math.floor(Math.random()*10)+1;
    // let numerosecreto =  Math.floor(Math.random()*10)+1;
    // return numerosecreto;
    // se puede retornar el valor, sin necesidad de haber creado
    // una variable

} //return = retorna un dato


//Capturar dato de entrada del usuario
console.log(numeroSecreto);


function VerificarIntento() {
    let numeroDeusuario = parseInt(document.getElementById("valorUsuario").value)
 if (numeroDeusuario === numeroSecreto){
    asignarTextoElemento("p", `Ganaste en ${intentos} ${intentos==1? "intento":"intentos"}`);
    document.getElementById("reiniciar").removeAttribute("disabled"); // Remover atributo de un elemento
 }  else  {
    if (numeroDeusuario > numeroSecreto){
        asignarTextoElemento("p", "El numero secreto es menor");
    } else {
        asignarTextoElemento("p", "El numero secreto es mayor");
    } 
    intentos ++;
    limpiarCaja();
 }
    return;
}//.value es necesario para obtener el contenido del input

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value =" ";
    
}


function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}
condicionesIniciales();


