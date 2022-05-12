let fruits = ['Fresa', 'Banano', 'Mango', 'Durazno', 'Sandia'];

//eliminar elementos del array
fruits.splice(4,2);
console.log(fruits);

//eliminar mango y reemplazarlo por sandia
fruits.splice(2,1,'Pera');
console.log(fruits);

//eliminar el ultimo elemento de un array
console.log(fruits.pop());

//eliminar el primer elemento de un array
console.log(fruits.shift());