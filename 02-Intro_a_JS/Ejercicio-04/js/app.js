/*
    Ejercicio 1
    Escribe una funcion llamada evaluate que reciba como parametro un numero y retorne
    lo siguiente:
    "Positivo" si el numero es positivo,
    "Negativo" si el numero es negativo y
    "Cero" si el numero es cero

    Ejercicio 2
    Escriba una funcion para ingresar cualquier letra del
    alfabeto y verifique si es vocal o consonante

    Ejercicio 3
    Escribe una funcion que simule el juego piedra, papel o tijera
    simulando dos personas pidiendo nombre y despues de 3 rondas diga quien gana
    felicitaciones y si quieren volver a jugar

    Ejercicio 4
    Realizar una funcion con la cual determinen si una cadena es palindromo o no
*/

// //Ejercicio 1
// function evaluate(numero){
//     if(numero > 0){
//         document.write(`Positivo, ${numero}`);
//         document.write('<br>');
//     }else if(numero < 0){
//         document.write(`Negativo, ${numero}`);
//         document.write('<br>');
//     }else if(numero === 0){
//         document.write(`Cero,  ${numero}`);
//         document.write('<br>');
//     }
// }

// evaluate(0);
// evaluate(-8);
// evaluate(100);

// //Ejercicio 2
// var vocales = ['a', 'e', 'i', 'o', 'u'];
// var consonantes = ['b', 'c', 'd', 'f', 'g','h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

// function vocalConsonante(letra){

//     for(var i = 0; i <= vocales.length; i++){
//         if(letra.toLowerCase() === vocales[i]){
//             document.write(`Vocal,  ${letra}`);
//             document.write('<br>');
//         }
//     }


//     for(var i = 0; i <= consonantes.length; i++){
//         if(letra.toLowerCase() === consonantes[i]){
//             document.write(`Consonante,  ${letra}`);
//             document.write('<br>');
//         }
//     }
// }

// vocalConsonante('A');
// vocalConsonante('f');
// vocalConsonante('s');
// vocalConsonante('u');

// //Ejercicio 3
// /* 
// scribe una funcion que simule el juego piedra, papel o tijera
//     simulando dos personas pidiendo nombre y despues de 3 rondas diga quien gana
//     felicitaciones y si quieren volver a jugar
// */
// var jugadorUno = prompt(`Ingresa el nombre del primer jugador: `);
// var jugadorDos = prompt(`Ingresa el nombre del segundo jugador: `);

// function piedraPapelTijera(){
    

//     //El primer elemento es el jugador 1 y el segundo el jugador 2
//     var turnoJugadores = [];
    
//     var turnoJugadores = setTurno(turnoJugadores);

//     juego(turnoJugadores);
// }

// function setTurno(turnoJugadores){

//     if(turnoJugadores === `Null` || turnoJugadores.length === 0){
//         var turno = Math.floor(Math.random() * 2);

//         if(turno === 1){
//             alert(`El turno es aleatorio, ${jugadorUno} inicia`);
//             turnoJugadores[0] = 1;
//             turnoJugadores[1] = 0;
//         }else{
//             alert(`El turno es aleatorio, ${jugadorDos} inicia`);
//             turnoJugadores[0] = 0;
//             turnoJugadores[1] = 1;
//         }

//     }else if(turnoJugadores[0] === 1 && turnoJugadores[1] === 0){
//         turnoJugadores[0] = 0;
//         turnoJugadores[1] = 1;
//     }else if(turnoJugadores[0] === 0 && turnoJugadores[1] === 1){
//         turnoJugadores[0] = 1;
//         turnoJugadores[1] = 0;
//     } 

//     return turnoJugadores;
// }

// function juego(turnoJugadores){
//     var rondasParaJugador1 = [];
//     var rondasParaJugador2 = [];
//     var rondasTerminadas = 0;

//     for(var i = 0; i < 3; i++){
//         alert(`Ronda ${i+1}`);

//         do{
//             if(rondasParaJugador1.length === 3 && rondasParaJugador2.length === 3){
//                 rondasTerminadas = 0;
//             }else if(turnoJugadores[0] === 1 && turnoJugadores[1] === 0){
//                     alert(`${jugadorUno}, prepárate`);
//                     rondasParaJugador1 = rondas(jugadorUno, rondasParaJugador1);
//                     setTurno(turnoJugadores);
//                 }else if(turnoJugadores[0] === 0 && turnoJugadores[1] === 1){
//                     alert(`${jugadorDos}, prepárate`);
//                     rondasParaJugador2 = rondas(jugadorDos, rondasParaJugador2);
//                     setTurno(turnoJugadores)
//                 }
//         }while(rondasParaJugador1.length === 3 && rondasParaJugador2.length === 3);

//         ganador(jugadorUno, jugadorDos, rondasParaJugador1, rondasParaJugador2);
//     }

//     console.log(rondasParaJugador1);
//     console.log(rondasParaJugador2);
// }

// function rondas(jugador, rondasParaJugar){
    
//     var opcion = prompt(`${jugador}, ingresa piedra, papel o tijera:`);

//     //Piedra es 1, papel es 2 y tijera es 3
//     if(opcion.toLowerCase() === `piedra`){
//         rondasParaJugar.push(1);
//     }else if(opcion.toLowerCase() === `papel`){
//         rondasParaJugar.push(2);
//     }else if(opcion.toLowerCase() === `tijera`){
//         rondasParaJugar.push(3);
//     }

//     return rondasParaJugar;
// }

// function ganador(jugadorUno, jugadorDos, rondasParaJugador1, rondasParaJugador2){

// }

// piedraPapelTijera();

// //---------------------------------------------------------
// //Ejercicio 4
// var texto = prompt(`Ingresa una palabra`);

// function palindromo(texto){
//     var textoSinEspacios = [];
//     var indice = 0;

//     for (var i = 0; i < texto.length; i++){
//         if(texto[i] == ' '){

//         }else{
//             textoSinEspacios[indice] = texto [i];
//             indice++;
//         }
//     }

// //Lectura de texto derecha a izquierda
//     var indiceAlreves = (textoSinEspacios - 1);
//     var msg = ``;
    
//     for(var i = 0; i < textoSinEspacios.length; i++){
//         if(textoSinEspacios[i] != textoSinEspacios[indiceAlreves]){
//             msg = `La oracion no es un palindromo`;
//         }else{
//             indiceAlreves--;
//             msg = `La oracion es un palindromo`;
//         }
//     }

//     return msg;
// }

// alert(palindromo(texto));