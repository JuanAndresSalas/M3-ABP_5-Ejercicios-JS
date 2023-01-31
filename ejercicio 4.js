/* Construya una función que dado un número n entero mayor que 10 y menor que 1000 calcule
la sumatoria de todos los números pares contenidos en el rango. */

function sumaPares(n) {
    let suma = 0;
    if(n < 10 || n > 1000){
        return "El número debe estar en el rango de 10 a 1000"
    }else{
        for (let i = 10; i <= n; i++) { 
            if (i % 2 === 0) {
              suma += i;
            }
          }
          return suma;
    }
    
  }

var numIngreso = 35;
console.log("Ejercicio 4");
console.log("El numero ingresado es: " + numIngreso);
console.log("Sumatoria de pares: " + sumaPares(numIngreso));
console.log("========================================");

