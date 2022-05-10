//Definicion de clases de POO
class Vehiculo {
    constructor(marca, modelo, valor, color){
        this.Marca = marca;
        this.Modelo = modelo;
        this.Valor = valor;
        this.Color = color;
        this.Estado = function (estado) {
            if (estado == 1){
                return 'El vehiculo se apagó';
            }else{
                return 'El vehiculo se encendió';
            }
        }
    }
}

//Creamos copia de la clase Vehiculo
let vehiculo1 = new Vehiculo ('Toyota', 2022, 230000, 'Blanco');
let vehiculo2 = new Vehiculo ('Nissan', 2021, 200000, 'Negro');
let vehiculo3 = new Vehiculo ('Chevrolet', 2023, 150000, 'Plateado');

console.log(vehiculo1.Marca);
console.log(vehiculo2.Marca);
console.log(vehiculo1.Estado(1));
console.log(vehiculo2.Estado(0));

let arregloVehiculos = [vehiculo1,vehiculo2,vehiculo3];

console.log(arregloVehiculos);

function obtenerNombre(objeto){
    return objeto.Marca;
}

//Obteneer propiedades con Map
let nombresVehiculos = arregloVehiculos.map(obtenerNombre);
console.log(nombresVehiculos);

function filtroValor(objeto){
    if(objeto.Valor <= 200000){
        return objeto;
    }
}

//Filtrar propiedades con filter
let filtroVehiculos = arregloVehiculos.filter(filtroValor);
console.log(filtroVehiculos);
