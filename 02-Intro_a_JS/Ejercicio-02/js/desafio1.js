/*
Ejercicio 1
Se requiere una aplicacion que solicite un numero de entrada al usuario,
basados en este numero debemos encontrar los numeros pares desde ese numero hasta cero y
mostar al usuario cada uno de los numeros pares encontrados.
*/

var numeroEntrada = Number(prompt('Ingresa un numero'));

for(var i = numeroEntrada; i >= 0; i--){

    if(i %2 == 0){
        document.write(`Numero par: ${i}`);
        document.write(`<br>`);
    }

}