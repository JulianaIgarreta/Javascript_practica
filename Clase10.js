// let numbers =[22, 33, 54, 66, 72];
// console.log(numbers[numbers.length])

// let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk",
// "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
// console.log(grupoDeAmigos[1][0])

let str = "un string cualquiera";
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string",
"123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])

// Colecciones de películas (y más...)

/*El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
Para esto, deberás:
1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente.*/

let pelicula = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
console.log (pelicula[0]);


/*2. Más tarde, de producción dieron el aviso de que las películas deberían estar
todas en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().*/

function mayuscula (arr) {
    return arr.toUpperCase();
}
console.log(pelicula.map(mayuscula));

/*3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay
que crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como
parámetros, para poder agregar los elementos contenidos en el segundo array
dentro del primero, y así retornar un solo array con todas las películas como
sus elementos.
Importante: las películas animadas también deberían convertirse a
mayúsculas.*/

let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function uniendoArrays (arr1, arr2) {
    return arr1.push(arr2)
}

uniendoArrays(pelicula, peliculasAnimadas);
console.log(pelicula);
console.log(peliculasAnimadas);

/*4. Durante el proceso, uno de los desarrolladores advierte que el último elemento
del array de películas animadas es un videojuego. Ahora tenés que editar el
código y modificarlo de manera que puedas eliminar ese último elemento
antes de migrar el contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable.*/

let elementoEliminado = peliculasAnimadas.pop();
console.log(pelicula);
console.log(peliculasAnimadas);


/*5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Te piden crear una función que compare las calificaciones e indique si son
iguales o diferentes. Te confirman que están en el orden adecuado y que solo
traen valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden
en orden al del array resultante de combinar películas con películas animadas.
Es decir, el primer elemento del array de películas general corresponde al
primer elemento de asiaScores y al primer elemento de euroScores, y así
sucesivamente.
*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparandoCalificaciones (valor1, valor2, pelicula) {
    if (valor1 == valor2 ) {
        console.log("La pelicula " + pelicula + " tiene la misma puntuacion en europa y en asia");
    } else {
        console.log("La pelicula " + pelicula + " tiene diferente puntuacion en europa y en asia");
    }
}

console.log(comparandoCalificaciones (asiaScores[3], euroScores[3], pelicula[3]));

/*Array inverso
En este ejercicio deberás crear una función que devuelva un array con sus elementos
invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e
invierta el orden de sus elementos.
1. Creá la función imprimirInverso que tome un array como argumento y que
imprima en la consola cada elemento en orden inverso (no tenés que invertir el
array).
2. Creá la función inversor que tome un arreglo como argumento y devuelva uno
nuevo invertido.*/

let prueba1 = [1, "Matias", 3, "JLO", "Juli"];

// function imprimirInverso (arr) {
//     console.log(arr.pop());
//     console.log(arr.pop());
//     console.log(arr.pop());
//     console.log(arr.pop());
//     console.log(arr.pop());
// }

// imprimirInverso(prueba1);


function inversor (arr) {
    let nuevoArreglo = [];
    nuevoArreglo.push(arr.pop())
    nuevoArreglo.push(arr.pop())
    nuevoArreglo.push(arr.pop())
    nuevoArreglo.push(arr.pop())
    nuevoArreglo.push(arr.pop())
    return nuevoArreglo;
}

console.log(inversor (prueba1));

/*sumaArray()
En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
números (3 elementos) y devuelva la suma de todos ellos.
Ejemplo:
● sumArray([1,2,3]) // 6
● sumArray([10, 3, 10]) // 23
● sumArray([-5,100, 19]) // 114*/


function sumaArray (arr) {
    return arr[0] + arr[1] + arr[2];
}

console.log(sumaArray([1, 2, 3])); 
console.log(sumaArray([10, 3, 10])); 
console.log(sumaArray([-5, 100, 19])); 

/*Simulación Array.join()
En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
strings de 4 elementos y simule el comportamiento del método Array.join().
Importante: no podés usar el método Array.join() original.
Ejemplo:
● join(["h","o","l","a"]) debe retornar el string "hola".
● join(["c","h","a,"u"]) debe retornar el string "chau".*/

function join (arr) {
    return arr[0] + arr[1] + arr[2] + arr[3]
}

console.log(join (["M", "a", "t", "i"]));