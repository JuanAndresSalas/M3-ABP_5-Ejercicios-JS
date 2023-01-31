/*Construya una función que dado un número n entero y menor que 100 calcule la sumatoria de 1 hasta n. */

function sumatoria(numFunc){
    return (numFunc * (numFunc + 1))/2 //Fórmula Suma de Gauss
};


var numSumatoria = 4;
console.log("Ejercicio 1");
console.log("Sumatoria de " + numSumatoria);
console.log(sumatoria(numSumatoria));
console.log("========================================")