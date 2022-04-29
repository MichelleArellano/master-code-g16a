/*
Ejercicio 2
Se requiere una aplicacion que solicite una cantidad de notas al usuario y con esas notas
se debe calcular el promedio, mostrar al usuario su calificacion final y si ganó el curso 
o no. Si la calificacion es mayor a 6 se determina que ganó el curso o de lo contrario
si lo perdiós.
-> Pedir al usuario cuantas notas
*/

var cantidadNotas = Number(prompt('Ingresa cuantas notas quieres promediar: '));
var nota = 0;
var sumaNotas = 0;

for(var i = 1; i <= cantidadNotas; i++){
    nota = Number(prompt(`Ingresa la nota ${i}: `));
    document.write(`Nota ${i}: ${nota}`);
    document.write(`<br>`);
    sumaNotas = sumaNotas + nota;
}

var promedio = sumaNotas / cantidadNotas;

if(promedio <= 5.9){
    document.write(`Tu promedio es: ${promedio}, no has pasado tu curso`);
}else{
    document.write(`Tu promedio es: ${promedio}, felicitaciones has pasado tu curso`);
}