const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR

const archivos = require("./lecturaEscritura");
//Leemos y parceamos el objeto JSON

const arrayBicis = archivos.leerJson('bicicletas');

//A.Creamos el objeto que representa toda la aplicación
appBici = {

    //B. Agregamos una orpierdad que asigna las bicicletas obtenidas a partir del método leer 
    bicicletas: arrayBicis,

    //C.Representamos la cantidad máxima de bicicletas por tanda
    bicicletasPorTanda: 4,

    //D.
    listarBicicletas: function (array) {
        return array.forEach(listadoBicicletas => {
            let estado = listadoBicicletas.dopaje ? "No habilitado" : "Habilitado";
            console.log(`Ciclista: ${listadoBicicletas.ciclista} marca: ${listadoBicicletas.marca} rodado: ${listadoBicicletas.rodado}, peso: ${listadoBicicletas.peso} kg, largo: ${listadoBicicletas.largo} cm, estado: ${estado}.`)

        });
    },

    //E
    ciclistasHabilitados: function () {
        return this.bicicletas.filter(elemento => elemento.dopaje == false)
    },

    //F
    buscarPorId: function (numeroID) {
        return this.bicicletas.find((elemento) => elemento.id == numeroID)

    },
    //G
    filtrarPorPeso: function (peso) {
        ciclistasDopajeNegativo = this.ciclistasHabilitados();
        return this.bicicletas.filter((elemento) => elemento.peso <= peso)
    },
    //H
    ordenarPorRodado: function () {
        return this.bicicletas.sort((a, b) => a.rodado - b.rodado)
    },
    //I
    largoPromedio: function () {
        let acumulador;
        let longitudTotal = this.bicicletas.reduce((acumulador, elemento) => acumulador + elemento.largo, 0);
        return (longitudTotal / this.bicicletas.length)

    },
    //J
    aumentarPeso: function (aumentoPeso, idBici) {
        let identificadorBici = this.buscarPorId(idBici);
        if (identificadorBici) {
            identificadorBici.peso += aumentoPeso;
            archivos.escribirJson("bicicletas2", this.bicicletas)
        }else{
            console.log("Bicicleta no encontrada")
        }
    },
    //K
    generarTanda: function(rodado, peso){
        let nuevoArray 

    }

}



// console.log(arrayBicis);
// console.log(appBici.bicicletas);
// console.log(appBici.bicicletasPorTanda);
//appBici.listarBicicletas(appBici.bicicletas)
//console.log(appBici.ciclistasHabilitados())
//console.log(appBici.buscarPorId(2))
//console.log(appBici.filtrarPorPeso(7.5))
//console.log(appBici.ordenarPorRodado())
//console.log(appBici.largoPromedio());
//appBici.aumentarPeso(2, 12);


















