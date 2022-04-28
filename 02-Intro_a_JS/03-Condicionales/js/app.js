//Paso 1: Definimos variables de entrada y uso interno del algoritmo
var nombreCompleto;
var añoNacimiento, añoActual;
var genero;
var edad;
var viveNortePais;
var embarazada;
var tieneNueveSemanasGestacion;

//Paso 2: Solicitar datos al usuario
nombreCompleto = prompt('Ingresa tu nombre completo');
añoNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
añoActual = Number(prompt('Ingresa el año actual'));
genero = prompt('Selecciona tu género: F=Femenino, M=Masculino');
viveNortePais = prompt('¿Vives en un estado al norte al país? Respuesta: S o N');

//Paso 3: Desarrollar la logica de negocio
if(nombreCompleto !== '' && !isNaN(añoNacimiento) && !isNaN(añoActual) && genero !== '' && viveNortePais !== ''){
    edad = añoActual - añoNacimiento;

    //validamos si la persona es menor a 18 años
    if(edad < 18){
        alert(`Lo sentimos ${nombreCompleto}, aún no puedes vacunarte, porque eres menor de edad.`);
    } else{
        //validamos si vive en el norte del pais
        if(viveNortePais.toUpperCase() === 'S'){
            //validamos si es Masculino o Femenino
            if(genero.toUpperCase() === 'F'){
                embarazada = prompt('¿Estas embarazada? Respuesta: S o N');
                
                //validamos si esta embarazada o no
                if(embarazada.toUpperCase() === 'S'){
                    tieneNueveSemanasGestacion = prompt('¿Tienes mas de 9 semanas de gestación? Respuesta: S o N');

                    //validamos si tiene mas de 9 semanas de gestacion
                    if(tieneNueveSemanasGestacion.toUpperCase() === 'S'){
                        if(edad >= 30){
                            alert(`Felicitaciones ${nombreCompleto}, ya puedes vacunarte`);
                        } else{
                            alert(`Lo sentimos ${nombreCompleto}, aún no puedes vacunarte, porque estamos en fase de mayores de 30 años.`);
                        }
                    } else{
                        alert(`Lo sentimos ${nombreCompleto}, aún no puedes vacunarte, porque existe un riesgo para tu bebe.`);
                    }
                } else{
                    if(edad >= 30){
                        alert(`Felicitaciones ${nombreCompleto}, ya puedes vacunarte`);
                    } else{
                        alert(`Lo sentimos ${nombreCompleto}, aún no puedes vacunarte, porque estamos en fase de mayores de 30 años.`);
                    }
                }
            } else{
                if(edad >= 30){
                    alert(`Felicitaciones ${nombreCompleto}, ya puedes vacunarte`);
                } else{
                    alert(`Lo sentimos ${nombreCompleto}, aún no puedes vacunarte, porque estamos en fase de mayores de 30 años.`);
                }
            }
        } else{
            alert(`Lo sentimos ${nombreCompleto}, aún no puedes vacunarte porque no te encuentras en una zona habilitada para esto aún.`);
        }    
    }
} else{
    alert('Ups, te faltaron datos por ingresar, intentalo de nuevo');
}