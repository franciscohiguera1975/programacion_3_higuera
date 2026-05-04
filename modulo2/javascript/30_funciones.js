// Funcion declarada
function saludo(){
    console.log("Hello World")
}
saludo();

// Función expresada
const saludarHola = function(){
    console.log("Hola con funcion expresada");
}
saludarHola();
// Función Flecha
const saludosFlecha=()=>{
    console.log("Hello con Función Flecha");
}
saludosFlecha();

// Función Anonima
setTimeout(function(){
    console.log("Ejecutando...")
},1000)

// funcion con parametros

function saludarConParametros(nombre){
    console.log(" Hola "+nombre)
}
saludarConParametros("Pedro")

function sumar(a,b){
    return a+b;
}
resultado=sumar(45,5);
console.log(resultado);

