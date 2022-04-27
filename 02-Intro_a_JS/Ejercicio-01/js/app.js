/*
    Calcular la edad de una persona obteniendo el año de nacimiento y el año actual, y validar si es un niño,
    un adolecente, un adulto joven, un adulto o un adulto mayor 
*/

//Paso 1: Definir variables para datos de entrada
var nombreCompleto;
var edad;

//Paso 2: Solicitar los datos al usuario
nombreCompleto = prompt('Ingresa tu nombre completo');
edad = prompt('Ingresa tu edad');

//Paso 3: Ejecutar la logica del programa y Paso 4: Definir la salida
if(edad > 0 && edad < 12){
    document.write('Hola ' + nombreCompleto + ', tu edad es: ' + edad + ' y eres un niño');
}else if(edad >= 12 && edad <= 19){
    document.write('Hola ' + nombreCompleto + ', tu edad es: ' + edad + ' y eres un adolescente');
}else if(edad >= 20 && edad <= 39){
    document.write('Hola ' + nombreCompleto + ', tu edad es: ' + edad + ' y eres un adulto joven');
}else if(edad >= 40 && edad <= 59){
    document.write('Hola ' + nombreCompleto + ', tu edad es: ' + edad + ' y eres un adulto');
}else if(edad >= 60 && edad <= 119){
    document.write('Hola ' + nombreCompleto + ', tu edad es: ' + edad + ' y eres un adulto mayor');
}else{
    document.write('No eres humano');
}