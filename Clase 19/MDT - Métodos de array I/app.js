const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");


// A. Utilizar un método de array que permita recorrer todo el arrayProfesionales 
// proporcionado en él archivo app.js y en cada iteración realizaremos la 
// impresión de dos propiedades de cada objeto en cuestión 
// nombre - especialidad , en nuestra consola cuando ejecutemos 
// este método deberíamos visualizar algo como lo siguiente:
// ‘Huber Wilkins - Neumonología’
// ‘Goldie Haley - Cardiología ‘ 
// Pena Landry - Dermatología... 

let filtrado = arrayProfesionales.forEach(element => {
    console.log(element.nombre + " - " + element.especialidad)  
});


//B Utilizar un método de array que permita recorrer todo el arrayProfesionales y modificar de cada uno la propiedad honorarioConsulta incrementado el valor de la misma en un 5%, luego imprimir el arrayProfesionales para ver la modificación realizada.

arrayProfesionales.map(element => {
    element.honorarioConsulta = element.honorarioConsulta + (element.honorarioConsulta * 0.05);

})
console.log(arrayProfesionales)


//C. Utilizar un método de array que permite recorrer todo el array de profesionales y  retornar profesionales deshabilitados, es decir,  filtrar por la propiedad estaHabilitado cuando esta sea false, guardar el retorno de este filtro en una variable profesionalesDeshabilitados e imprimir la misma para verificar los objetos filtrados.

let profesionalesDeshabilitados = arrayProfesionales.filter(element => {
    return element.estaHabilitado = element.estaHabilitado == false ? 

})

console.log(profesionalesDeshabilitados)


//D

//E

//F

//G 

//H 