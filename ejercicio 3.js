/* Cree una función que dado un número n entero y menor que 100 imprima la cuenta regresiva,
es decir si n es 5 deberá imprimir 5,4,3,2,1. */

function cuentaRegresiva(numero) {
    let arreglo = [];
    if (numero % 1 > 0 || numero > 100) {
        return "El número debe ser un entero menor que 100"
    }else{
        for (let i = numero; i >= 1; i--) {
            arreglo.push(i)
          }
        return arreglo
    }
    
}

var numControl = 15;
console.log("Ejercicio 3");
console.log("Número de inicio: " + numControl)
console.log(cuentaRegresiva(numControl));
console.log("========================================");