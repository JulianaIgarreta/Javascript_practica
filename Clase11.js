/*Ejercicio 1

let peliculas = ["star wars","totoro","rocky","pulp fiction","la vida es bella"];
for(let i=0; i<peliculas.length; i++){
    peliculas[i] = peliculas[i].toUpperCase();
    console.log(peliculas[i])
}*/

/*Ejercicio 2

function pasajeDeElementos(array1, array2) {
    let array3;
    for(let i = 0; i<array1.length;i++){
        array3 = array1[i].toUpperCase();
        array2.push(array3);
    }
return array2;
}

let peliculasOriginales = ["HP", "Mi nombre Sam", "Los aristo gatos", "Chicas pesadas", "ET"];

let peliculas2 = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
console.log(pasajeDeElementos(peliculasOriginales, peliculas2));*/

var A =[5, 8, 4, 9, 5];
var B =[8, 7, 8, 6, 8];
var C = [7, 5, 10, 8, 3];

function puntajePromedio(arreglo){
    let sumar = 0;
    let division=0;
    for(let i =0; i <arreglo.length;i++){
    sumar = sumar + arreglo[i]; 
    division++;
    }
    return sumar / division;
}

//console.log(puntajePromedio(A));

function puntajeMayor(arreglo){
    let puntajeMayor = 0;
    for(let i = 0; i<arreglo.length;i++){
        if(puntajeMayor<arreglo[i]){
            puntajeMayor = arreglo[i];
        }
    }
    return puntajeMayor;
}

//console.log(puntajeMayor(A));

function competencia(A, B, C){

    let ganadorMod1 = 0;
    let ganadorMod2 = 0;

    let promedioMayor = 0;
    for(let i = 0; i<A.length;i++){
        if(promedioMayor<puntajePromedio(A)){
            promedioMayor = puntajePromedio(A)
        }else if(promedioMayor<puntajePromedio(B)){
            promedioMayor= puntajePromedio(B)
        }else{
            promedioMayor = puntajePromedio(C)
        }
    }
    console.log(promedioMayor);

    
    
}


