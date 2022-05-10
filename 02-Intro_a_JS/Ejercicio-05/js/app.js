/*
Recrear una aplicacion que permita obtener la nota promedio de cada estudiante de un profesor y
la nota promedio del grupo completo.

1.- Se requiere que cada alumno tenga nombre completo y sus calificaciones
2.- Se requiere que el profesor indique cuantos estudiantes va a ingresar
3.- Se requiere que el profesor indique cuantas notas digitara para cada alumno
4.- Imprimir con alert el promedio de cada estudiante
5.- Imprimir con alert el promedio general del grupo
*/

class Profesor{
    constructor(){
        this.CantidadAlumnos = prompt(`Ingresa la cantidad de estudiantes en tu grupo: `);
        this.CantidadDeNotas = parseInt(prompt(`Ingresa la cantidad de notas para los alumnos: `));
    }

    crearGrupo() {
        let grupo = [];

        alert(`Ingresa los datos de tus ${this.CantidadAlumnos} alumnos: `);

        for(let i = 0; i < this.CantidadAlumnos;i++){
            alert(`Alumno: ${i + 1}`);
            grupo[i] = new Alumno(this.CantidadDeNotas);
            console.log(grupo[i].Calificaciones);
            alert(`El promedio del alumno ${grupo[i].Nombre} es: ${grupo[i].Promedio}`);
        }
        return grupo;
    }

    promedioGrupal(grupo){
        let suma = 0;
        for(let i = 0; i < this.CantidadAlumnos;i++){
            suma = suma + parseFloat(grupo[i].Promedio);
        }
        console.log(suma / grupo.length);
        let promedio = parseFloat(suma / grupo.length);
        return promedio.toFixed(2);
    }

}

class Alumno{
    constructor(cantidadDeNotas){
        this.Nombre = prompt(`Ingresa el nombre: `);
        this.ApellidoPaterno = prompt(`Ingresa el apellido paterno: `);
        this.ApellidoMaterno = prompt(`Ingresa el apellido materno: `);
        this.CantidadDeNotas = cantidadDeNotas;
        this.Calificaciones = this.notas();
        this.Promedio = this.obtenerPromedioAlumno();
    }

    notas(){
        let calificaciones = [];
        let suma = 0;
        for(let i = 0; i < this.CantidadDeNotas; i++){
            calificaciones[i] = parseInt(prompt(`Ingresa la nota ${i + 1}: `));
        }
        return calificaciones;
    };

    obtenerPromedioAlumno(){
        let suma = 0;
        for(let i = 0; i < this.CantidadDeNotas; i++){
            suma = parseFloat(suma + this.Calificaciones[i]);
        }
        return parseFloat(suma / this.CantidadDeNotas).toFixed(2);
}

}

let profesor1 = new Profesor();
let grupo = profesor1.crearGrupo();
let promedioGrupo = profesor1.promedioGrupal(grupo);
alert(`El promedio del grupo es: ${promedioGrupo}`);

console.log(profesor1.CantidadAlumnos);
console.log(profesor1.CantidadDeNotas);
console.log(grupo);
console.log(promedioGrupo);


