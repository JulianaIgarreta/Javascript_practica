/*1. Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.*/

let convertir = pulgadasCentimetros => pulgadasCentimetros * 2.54;
console.log(convertir(10));

/*2. Crear una función que recibe un string y lo convierte en una una URL. 
ej: “pepito” es devuelto como “http://www.pepito.com”*/

let url = StringUrl => 'http://' + StringUrl;
console.log(url("www.pepito.com"));

/*Crear una función que recibe un string 
y devuelve la misma frase pero con admiración.*/

let admiracion = frase => frase + '!!!!';
console.log(admiracion('hola'));

/*Crear una función que calcule la edad de los perros, 
considerando que 1 año para nosotros son 7 de ellos. */
let edad = edadPerro => edadPerro * 7;

console.log(edad(4));

/*Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
PD: considera que tu mes de trabajo tiene 40 horas.*/

let valorHora = sueldo => sueldo / 40;
console.log(valorHora(14.000));

/*Crear la función calculadorIMC() que reciba la altura en metros 
y el peso en kilogramos y calcule el imc de una persona.  
Luego, ejecutar la función probando diferentes valores.*/

let IMC = (altura, peso) => peso / (altura * altura);
console.log(IMC(1.67, 57));

/*Crear una función que recibe un string en minúscula, lo convierta a 
mayúsculas y lo retorne. Investiga que hace el método de strings .toUpperCase()
*/

let aMayus = string => string.toUpperCase();
console.log(aMayus("juliana"));

/*Crear una función que recibe un parámetro y
devuelve qué tipo de dato es ese parámetro. */

let tipoDato = dato => typeof (dato);
console.log(tipoDato(true));

/*Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia
Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi
 */

let circunferencia = radio => 2 * radio * Math.PI;
console.log(circunferencia(5));

//CALLBACKS
/*
En pocas palabras es una función que es utilizada como parámetro en otra función, para comprender mejor realizamos los siguientes ejercicios:
A partir del siguiente array de nombres, crear una función que reciba un parámetro string,  para realizar la búsqueda de elementos que coincidan 
con dicho parámetro, y retorna un mensaje en caso de encontrar .
*/
const nombres = ['Martin', 'Homero', 'Cosme', 'Steven', 'Adam'];

function buscarNombre(nombre, callback) {
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] == nombre) {
            return callback(nombres[i])
        }       
    }
    return callback('')
}

function mostrarResultado(res) {
    if (res == '') {
        return 'Nombre no encontrado'
    } else {
        return 'Nombre encontrado'
    }

}

console.log(buscarNombre('Cosme', mostrarResultado));


