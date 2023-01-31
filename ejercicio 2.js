/*Construya una función que imprima si un número es primo o no. Los números primos son aquellos que son divisibles solo por 1 y por sí mismos.*/

function numeroPrimo(num) {
    if (num <= 1) return "El número debe ser distinto de 1"; //El número no puede ser 1
    for (let i = 2; i < num; i++) { // Este ciclo comprobará si los números desde el 2 hasta (número - 1) son divisores del número
      if (num % i === 0) return "El número " + num + " no es Primo"; // si encuentra un divisor retorna false
    }
    return "El número "+ num + " es Primo"; // Si el ciclo no encuentra divisores, retorna esta frase
  }

var numero = 5;

console.log("Ejercicio 2");
console.log("Número a evaluar: " + numero)
console.log(numeroPrimo(numero));
console.log("========================================");