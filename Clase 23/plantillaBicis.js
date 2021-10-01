const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR

const archivos = require("./lecturaEscritura");
//Leemos y parceamos el objeto JSON

const arrayBicis = archivos.leerJson('bicicletas'); 

//A.Creamos el objeto que representa toda la aplicación
appBici = {

    //B. Agregamos una orpierdad que asigna las bicicletas obtenidas a partir del método leer 
    bicicletas : arrayBicis, 

    //C.Representamos la cantidad máxima de bicicletas por tanda
    bicicletasPorTanda:4,

    //D.
    listarBicicletas: function(array){
        return array.forEach(listadoBicicletas => { 
            let estado = listadoBicicletas.dopaje ? "No habilitado" : "Habilitado";            
            console.log(`Ciclista: ${listadoBicicletas.ciclista} marca: ${listadoBicicletas.marca} rodado: ${listadoBicicletas.rodado}, peso: ${listadoBicicletas.peso} kg, largo: ${listadoBicicletas.largo} cm, estado: ${estado}.`)
            
        });
    },

    //E
    ciclistasHabilitados: function(){
        return this.bicicletas.filter(elemento => elemento.dopaje == false)
    },

    //F
    buscarPorId : function(numeroID){
        return this.bicicletas.find((elemento)=> elemento.id == numeroID)

    }
   




}

//A

// console.log(arrayBicis);
// console.log(appBici.bicicletas);
// console.log(appBici.bicicletasPorTanda);
//appBici.listarBicicletas(appBici.bicicletas)
//console.log(appBici.ciclistasHabilitados())






















