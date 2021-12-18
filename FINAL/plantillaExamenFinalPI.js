const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
const nombre = "Juliana Igarreta";
const tema = "Tema 1";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

//Requerimos el archivo de ayuda
//Leemos y parceamos el objeto JSON
const archivos = require("./lecturaEscritura");
const arrayPelis = archivos.leerJson('peliculas');

//A.Creación del objeto literal
gestionDePeliculas = {
    //B.
    peliculas: arrayPelis,
    //C.
    listarPeliculas: function (array) {
        return array.forEach(listadoPeliculas => {
            let tienePremio = listadoPeliculas.fuePremiada ? "Premiada" : "Sin premios";
            console.log(`${listadoPeliculas.titulo}, de ${listadoPeliculas.director}. Duración de ${listadoPeliculas.duracion} minutos, ${tienePremio} (${listadoPeliculas.calificacionIMDB} / 10) en IMDB`)
        });
    },
    //D
    buscarPorTitulo: function (tituloPelicula) {
        return this.peliculas.find((elemento) => elemento.titulo === tituloPelicula);

    },
    //E
    peliculasPremiadas: function () {
        return this.peliculas.filter(i => i.fuePremiada)
    },

    //F
    filtrarPorDuracion: function(duracionMinima,duracionMaxima){
        return this.peliculas.filter((elemento) => elemento.duracion >= duracionMinima && elemento.duracion <= duracionMaxima); 
    },
    //G
    ordenarPorCalificacion: function () {
        return this.peliculas.sort((a, b) => a.calificacionIMDB - b.calificacionIMDB)
    },
    //H
    duracionTotal: function(){
        let acumulador = 0;
        let longitudTotal = this.peliculas.reduce((acumulador, elemento) => acumulador + elemento.duracion, 0);
        return `La duración de todas las películas sumadas es de ${longitudTotal} minutos`
    },
    //I
    premiarPeliculaPorTitulo: function(tituloPelicula2){
        modificarPelicula = this.buscarPorTitulo(tituloPelicula2);
        if(modificarPelicula){
            modificarPelicula.fuePremiada = true;
            archivos.escribirJson("peliculas", this.peliculas)
        }
        return modificarPelicula;
    }

}

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculas);
console.log(o);

console.log(v, oo + " .D. Buscar");
console.log(gestionDePeliculas.buscarPorTitulo("Doctor Strange"));
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
console.log(gestionDePeliculas.peliculasPremiadas())
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
console.log(gestionDePeliculas.filtrarPorDuracion(100,200));

console.log(o);

console.log(v, oo + " .G. Ordenar");
console.log(gestionDePeliculas.ordenarPorCalificacion());
console.log(o);

console.log(v, oo + " .H. Duracion");
console.log(gestionDePeliculas.duracionTotal())
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
console.log(gestionDePeliculas.premiarPeliculaPorTitulo("The Last Lovecraft: Relic of Cthulhu",
));
console.log(o);
