/*Cree una función que permite dado un número n imprima la tabla de multiplicar de dicho
número hasta el 12. */

function tablaMultiplicar(numero) {
    for (let i = 1; i <= 12; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

var numTabla = 7;
console.log("Ejercicio 5");
console.log("Tabla del "+ numTabla + ":")
tablaMultiplicar(numTabla);
console.log("========================================");
