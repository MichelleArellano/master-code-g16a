// Con Spread Operator
function masterSpread(programa, ...senseis) {
    return senseis
}

// Con un Array (de la forma tradicional)
function masterArray(programa, senseis) {
    return senseis
}

//function masterArray()

masterSpread("Master en Coding", "Mali", "Maui", "Gera", "Mackaber", "Dolores", "Edgar", "Otra", "Otra")

masterArray("Master en Coding", ["Mali", "Maui", "Gera", "Edgar"])

//Hacer copia de un array
let arr = [1,2,3,4];
let arr_2 = [...arr];
arr_2.push(5);
console.log(arr);

//String template
let varName = "mackaber"

console.log(`Hola ${varName}`);
console.log("Hola " + varName);

str = `
hola 
mi nombre es
mackaber
`

str = "\nhola \nmi nombre es\nmackaber\n"

let prc = 20
console.log(`Porcentaje de terminado: ${prc} %`);

function master(programa, ...senseis) {
    console.log(`Bienvenido a ${programa}`);
    console.log(`Senseis: ${senseis[0]} ${senseis[1]} ${senseis[2]}`);
}

master("Master en Coding", "Mali", "Maui", "Gera")

//Arroy functions
function suma(a, b) {
    return a + b;
}
suma(1,2)

/*
const suma = function(a,b) {
    return a + b;
}
suma(1,2)
*/
/*
const suma = (a,b) => {
    return a + b;
}
suma(1,2)
*/

// Si tu función solo es una línea de código no es necesario poner ni las llaves {} ni el return.
suma = (a,b) => a + b; 
suma(1,2)

function ejecuta(fn, a, b) {
    return fn(a,b)
}

ejecuta((a,b) => a+b,1,2)

// Si solo se pasa un argumento no son necesarios los paréntesis ( )
ejecuta(a => a**2,3)

