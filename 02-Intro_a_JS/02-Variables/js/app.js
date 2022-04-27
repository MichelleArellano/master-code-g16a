//Paso 1: Definir variables para datos de entrada
var nombreCompleto;
var añoNacimiento;
var añoActual;

//Paso 1.1: Definir variables de uso del algoritmo
var edad;

//Paso 2: Solicitar los datos al usuario
nombreCompleto = prompt('Ingresa tu nombre completo');
añoNacimiento = prompt('Ingresa el año en que naciste');
añoActual = prompt('Ingresa el año actual');

//Paso 3: Ejecutar la logica del programa
edad = añoActual - añoNacimiento;

//Paso 4: Definir la salida
document.write('Hola ' + nombreCompleto + ', tu edad es: ' + edad);
