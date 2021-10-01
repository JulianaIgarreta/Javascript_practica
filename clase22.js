const archivos = require("./lecturaEscritura");
let arrayCompetidores = archivos.leerJson("autos");

let carrera = {

  //2A
  autos: arrayCompetidores,

  //2B
  autosPorTanda: 6,

  //2C
  autosHabilitados: function () {
    return this.autos.filter(elemento => elemento.sancionado === false)
  },

  //2D
  listarAutos : function (array) {
    array.forEach((competidor) => {
      let sancionado = competidor.sancionado ? "sancionado" : "habilitado";
      console.log( `Piloto: ${competidor.piloto}, patente: ${competidor.patente}, velocidad: ${competidor.velocidad}, peso en kg: ${competidor.peso}, estado: ${sancionado}.`);
    });
  },

  //2E
  buscarPorPatente : function (patente) {
    return this.autos.find((elemento) => elemento.patente === patente);
  },

  //2F
  filtrarPorCilindrada : function (cilindrada) {
    return this.autosHabilitados().filter((elemento) => elemento.cilindrada <= cilindrada);
  },

};

/*EJ 1*/
console.log(arrayCompetidores);
console.log('==========================');

/*EJ 2C*/
console.log(carrera.autosHabilitados());
console.log('**************************');

/*EJ 2D*/
console.log("****** competidores *****");
carrera.listarAutos(carrera.autos);
console.log();

/* EJ 2C*/
console.log("***** buscar por patente *****");
console.log(carrera.buscarPorPatente('ABC123'));
carrera.listarAutos([carrera.buscarPorPatente('ABC123')]);
console.log();

// /* EJ 2D */
console.log("***** filtrar por cilindrada *****");
console.log(carrera.filtrarPorCilindrada(1500));
console.log();

