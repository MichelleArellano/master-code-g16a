//Ejemplo de while
var nombreCompleto = prompt('Ingresa tu nombre completo');
var letraBuscar = prompt('Ingresa la letra que quieres saber cuantas veces aparece en tu nombre: ')
var i = 0;
var letraActual;
var cantidad = 0;

while(i <= nombreCompleto.length){
    //Michelle Arellano
    letraActual = nombreCompleto.substring(i,i+1);

    //validamos si la lera es igual a la que pidio el usuario
    if(letraActual.toLowerCase() === letraBuscar.toLowerCase()){
        cantidad++;
    }

    i++;
}

document.write(`La letra ${letraBuscar}, aparece ${cantidad} veces en tu nombre`);