//Crear una aplicacion que permita obtner la nota promedio de cada estudiante de un profesor y la nota promedio del grupo completo.
// 1. Se requiere que cada alumno tenga: Nombre completo y sus calificaciones.
// 2. Se requiere que el profesor indique cuantos estudiantes va a ingresar.
// 3. Se requiere que el profesor indique cuantas notas digitara para cada alumno.
// 4. Imprimir el promedio de cada estudiante en la columna de promedio.
// 5. Imprimir el promedio general del grupo al final de la pagina.

let cantidadAlumnos;
let cantidadNotas;

//creamos la funcion para genera la planilla
function GenerarPlanilla(){
    let table = document.getElementById('planilla');
    
    cantidadAlumnos = Number(document.getElementById('alumnos').value);
    cantidadNotas = Number(document.getElementById('notas').value);

    //creamos los nodos de fila (tr)
    for(let i=1; i<=cantidadAlumnos + 1; i++){
        let tr = document.createElement('tr');

        if(i===1){
            //creamos los nodos de columna (th) para el encabezado
            for(let j=1; j<=cantidadNotas+3; j++){
                let titulo;
                let th = document.createElement('th');

                if(j===1){
                    titulo = document.createTextNode('Orden');
                }
                else if(j===2){
                    titulo = document.createTextNode('Estudiante');
                }
                else if(j===cantidadNotas+3){
                    titulo = document.createTextNode('Def');
                }
                else{
                    titulo = document.createTextNode('Nota ' + (j-2));
                }
                
                th.appendChild(titulo);
                tr.appendChild(th);
            }
        }
        else{
            //creamos los nodos de columna (td) para los registros
            for(let j=1; j<=cantidadNotas+3; j++){
                let celda;
                let td = document.createElement('td');

                if(j===1){
                    celda = document.createTextNode(i-1);
                }
                else if(j===cantidadNotas+3){
                    celda = document.createElement('h6');
                    celda.setAttribute('id','p'+(i-1));
                }
                else{
                    celda = document.createElement('input');
                    celda.setAttribute('id','n'+ (j-2) + 'e' + (i-1));
                }
                
                td.appendChild(celda);
                tr.appendChild(td);
            }
        }
        
        table.appendChild(tr);
    }
}

//creamos la funcion para leer la planilla y calcular promedios
function CalcularPromedio(){
    let sumaGeneral = 0;
    let promedioGeneral;

    cantidadAlumnos = Number(document.getElementById('alumnos').value);
    cantidadNotas = Number(document.getElementById('notas').value);

    //leemos los estudiantes de la tabla
    for(let i=2; i<=cantidadAlumnos+1; i++){
        let suma = 0;
        let promedio = 0;

        //leemos las notas del estudiante en cada fila
        for(let j=3; j<=cantidadNotas+3; j++){
            if(j===cantidadNotas+3){
                //calculamos el promedio
                promedio = suma / cantidadNotas;

                //sumo a la suma general
                sumaGeneral = sumaGeneral + promedio;

                document.getElementById('p'+(i-1)).innerText = promedio;
            }
            else{
                //capturamos la nota de la columna actual
                suma = suma + Number(document.getElementById('n'+ (j-2) + 'e' + (i-1)).value);
            }
        }
    }

    //calculo promedio general
    promedioGeneral = sumaGeneral / cantidadAlumnos;

    document.getElementById('promedioGrupo').innerText = `El promdio general del grupo es ${promedioGeneral}`;
}