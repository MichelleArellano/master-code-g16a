/*
    Palindromo
*/

// let texto = prompt(`Ingresa una palabra`);

// function palindromo(texto){
//     let textoSinEspacios = [];
//     let indice = 0;

//     for (let i = 0; i < texto.length; i++){
//         if(texto[i] == ' '){

//         }else{
//             textoSinEspacios[indice] = texto [i];
//             indice++;
//         }
//     }

//     console.log(textoSinEspacios)
//     let textoCopia = textoSinEspacios.slice();
//     let textoAlReves = textoCopia.reverse();
//     console.log(textoAlReves)
//     let comprobacionPalindromo = [];

//     for(let i = 0; i < texto.length; i++){
//         comprobacionPalindromo[i] = textoSinEspacios[i] === textoAlReves[i] ? true : false;
//     }

//     console.log(comprobacionPalindromo)

//     let esPalindromo = comprobacionPalindromo.find(element => element == false);
//     console.log(esPalindromo)
    
//     let msg = ``;
    
//     if(esPalindromo === undefined){
//             msg = `Es un palindromo ${texto}`;
//     }else{
//             msg = `No es un palindromo ${texto}`;
//     }
    
//     return msg;
// }

// alert(palindromo(texto));

/*
    Length de arreglo de países
*/

let paises = ['Mexico','El salvador','Guatemala','Peru','Tangamandapio'];

function paisMasLargo(paises){
    
    if(paises === ''){
        alert(`No hay paises `);
    }else{
        let longitudes = [];

        for(let i = 0; i < paises.length; i++){
            longitudes[i] = paises[i].length;
        }

        let longitudMaxima = Math.max(...longitudes);

        let paisMasLargo = paises.find(paisLongitud => paisLongitud.length === longitudMaxima);
        
        alert(`La longitud mas larga es:  ${longitudMaxima} con el país: ${paisMasLargo}`);
    }
}

paisMasLargo(paises)

/*
    Farengheith a grados
*/

// function gradosFahrenheitACelsius(gradosFahrenheit){
    
//     let validarGrados = !isNaN(gradosFahrenheit) ? gradosFahrenheit : 0;
    
//     if(validarGrados){
//         let gradosCelsius = (gradosFahrenheit -32) * (5/9);
//         alert(`Los grados Celsius son:  ${gradosCelsius.toFixed(2)} `);
//     }else{
//         alert(`No es un valor válido `);
//     }
// }

// gradosFahrenheitACelsius(parseInt(prompt(`Ingresa los °F: `)))

/*
    Escribe una función que muestre todos los parametros enviados
*/

// function numeroParametros(...params){
//     console.log(params.length);
// }
// numeroParametros(1,2,3,4,5,65,4,3,3,5,3,3,5,5);