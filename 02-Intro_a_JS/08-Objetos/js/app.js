//Declaracion de objeto literal
let Vehiculo = {
    Marca: "Toyota",
    Color: "Rojo",
    Modelo: 2022,
    Tipo: "Sedan",
    Valor: 120000000,
    TipoLlanta: ['Pirelli', 'Michelin', 'GoodYear'],
    EnStock: true,
    Estado: function (estado) {
        if (estado === 1){
            return 'El vehiculo se apagó';
        }else{
            return 'El vehiculo se encendió';
        }
    },
    Mantenimiento: (estado) => estado === 1 ? console.log('El vehiculo ya termino su mantenimiento') : console.log('El vehiculo neceseita mantenimiento')
}

console.log("El vehiculo es de marca: " + Vehiculo.marca + " y tiene un valor de: " + Vehiculo.Valor);

//Template string
console.log(`El vehiculo es de marca: ${Vehiculo.Marca} y tiene un valor de: ${Vehiculo.Valor}`);

//Destructuracion de objetos
const {Tipo, Modelo, Color, Marca} = Vehiculo;
//let modelo = Vehiculo.Modelo;
//let color = Vehiculo.Color;
console.log(`El vehiculo es de color: ${Color} y es del año: ${Modelo}`);

//Acceder a arreglo dentro de una propiedad
console.log(Vehiculo.TipoLlanta1);

//Acceder a un metodo del objeto
console.log(Vehiculo.Estado(1));
console.log(Vehiculo.Estado(0));

console.log(Vehiculo.Mantenimiento(1));
console.log(Vehiculo.Mantenimiento(1));