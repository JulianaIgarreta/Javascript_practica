var num1 = 15;
var num2 = 10;
var num3 = 25;
var potencia;

function sumar(num1, num2,num3){
    console.log("La suma es igual a: "+ (num1 + num2))
    return num1+num2+num3;
    
}
function restar(num1, num2){
    console.log("La resta es igual a: "+ (num2 - num1))
   
}
function multiplicar(num1, num2){
    console.log("La multiplicacion es igual a: "+ num1 * num2)
    return num1*num2;
    
}
function dividir(num1, num2){
    console.log("La division es igual a: "+ num1 / num2)
}
function cuadradoDeUnNumero(num1){
    return  multiplicar(num1,num1)    
}
function promedioTresNumeros(num1,num2,num3){
    return (sumar(num1,num2,num3)/3)
}

console.log('-------------- Testeo de Operaciones / Calculadora --------------');

var sumaTotal = sumar(num1, num2, num3)
console.log(promedioTresNumeros(num1,num2,num3))

//console.log(sumaTotal);
restar(num1, num2);
multiplicar(num1, num2);
dividir(num1, num2);
potencia = cuadradoDeUnNumero(num1);
console.log("El cuadrado de " + num1 + " es igual a: " + potencia)
