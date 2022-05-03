/* 
    1.- Crear un arreglo de 6 platillos
    2.- Mediante un ciclo for, van a mostrar todos los platillos
    3.- Mediante un for o if, mostrar solo el valor 3 y 5
    4.- Mediante for o if, mostrar los elemento impares
    5.- Mediante for o if, mostrar los elemetos que sean pares

*/

var platillos = ['Tacos', 'Chilaquiles', 'Quesadillas', 'Sopa', 'Enchiladas', 'Mole'];
var i;
//Mostrando todos los platillos
document.write('Mostrando todos los platillos: ');
document.write('<br>');

for(i = 0; i < platillos.length; i++){
    document.write(`${i} Platillo: ${platillos[i]}`);
    document.write('<br>');
}

document.write('<br>');

//Mostrando solo platillo 3 y 5
document.write('Mostrando platillos 3 y 5: ');
document.write('<br>');

for(i = 0; i <= platillos.length; i++){
    if(i === 3){
        document.write(`El platillo 3: ${platillos[i-1]}`);
        document.write('<br>');
    }else if(i === 5){
        document.write(`El platillo 5: ${platillos[i-1]}`);
        document.write('<br>');
    }
}

document.write('<br>');

//Mostrando los elementos pares e impares
document.write('Mostrando los elementos pares e impares: ');
document.write('<br>');

for(i = 0; i < platillos.length; i++){
    if(i %2 == 0){
        document.write(`Platillo con index: ${i}, platillo: ${platillos[i]}, par`);
        document.write(`<br>`);
    }else{
        document.write(`Platillo con index: ${i}, platillo: ${platillos[i]}, impar`);
        document.write(`<br>`);
    }
}