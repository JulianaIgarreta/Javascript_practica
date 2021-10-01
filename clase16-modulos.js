const fs = require('fs');

const leerJson = function (nombreArchivo) {
     let archivo = fs.readFileSync(nombreArchivo,'UTF-8');
     archivo = JSON.parse(archivo);
     console.log(archivo);
}

leerJson('./modulos-clase16/listaAutos.json');




    
