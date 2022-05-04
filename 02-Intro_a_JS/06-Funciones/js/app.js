// function sumatoria(num1, num2){
//     var total = num1 + num2;
//     return `La suma total es: ${total}`;
// }

// console.log(sumatoria(7,9));

//---------------------------------------------

// function resta(a, b, c){
//     var resultado = a - b - c;
//     return resultado;
// }

// console.log(resta(10,23,56));

//---------------------------------------------

// //Tabla de multiplicar
// console.log(`1 x 0 = ${2 * 0}`);
// console.log(`1 x 1 = ${2 * 1}`);
// console.log(`1 x 2 = ${2 * 2}`);
// console.log(`1 x 3 = ${2 * 3}`);
// console.log(`1 x 4 = ${2 * 4}`);
// console.log(`1 x 5 = ${2 * 5}`);
// console.log(`1 x 6 = ${2 * 6}`);
// console.log(`1 x 7 = ${2 * 7}`);
// console.log(`1 x 8 = ${2 * 8}`);

// function tablaDelDos(){
//     for(var i = 0; i <= 10; i++){
//         console.log(`1 x ${i} = ${2 * i}`);
//     }
// }

// tablaDelDos();

//---------------------------------------------

// function suma(num1, num2, num3){
//     var total = num1 + num2 + num3;
//     return `La suma total es: ${total}`;
// }

// var valorSuma = suma(9, 8, 6);
// alert(valorSuma);

//---------------------------------------------

// function saludar(nombre, edad){
//     this.nombre = nombre;
//     this.edad = edad;
//     console.log(`Hola mi nombre es: ${this.nombre} y tengo: ${this.edad} años`);
// }

// saludar("Michelle", 26);

//---------------------------------------------

// function mayorDeEdad(edad){
//     if(edad > 18){
//         console.log(`El usuario es mayor de edad`);
//     }else{
//         console.log(`El usuario es menor de edad`);
//     }

//     if (edad > 100){
//         console.log(`El usuario no existe`);
//     }
// }

// mayorDeEdad(190);

//---------------------------------------------

var numerosNaturales = (numero) =>{
    for(var i = 1; i < numero; i++){
        console.log(i);
    }
}

numerosNaturales(30);