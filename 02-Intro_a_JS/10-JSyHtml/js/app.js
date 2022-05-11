//variable global
let otro = document.getElementById('otro');

function Registrar(){
    let datosBasicos = [];
    let m = document.getElementById('m');
    let f = document.getElementById('f');
    let registro = document.getElementById('registro');
    let acepto = document.getElementById('acepto');
    let genero, terminos;

    datosBasicos.push(document.getElementById('nombre').value);
    datosBasicos.push(document.getElementById('apellido').value);
    datosBasicos.push(document.getElementById('edad').value);
    datosBasicos.push(document.getElementById('fecnac').value);
    datosBasicos.push(document.getElementById('direccion').value);
    datosBasicos.push(document.getElementById('celular').value);   
    
    //valido el genero
    if(m.checked === true){
        genero = 'Masculino';
    }else if(f.checked === true){
        genero = 'Femenino';
    }else{
        genero = otro.value;
    }

    datosBasicos.push(genero);

    //valido si acepto los terminos
    if(acepto.checked === true){
        terminos = 'Si';

        datosBasicos.push(terminos);
        
        const tr = document.createElement('tr');

        //agregar nodos a la tabla
        for(let i=0; i<datosBasicos.length; i++){
            //agrego el registro a la tabla
            const td = document.createElement('td');

            let texto = document.createTextNode(datosBasicos[i]);

            td.appendChild(texto);
            tr.appendChild(td);
        }      
        
        registro.appendChild(tr);

    }else{
        alert('Para registrarte debe aceptar los terminos');
    }
}

function ValidarGenero(parametro){
    if(parametro === 3){
        otro.style.display = 'inline-block';
    }else{
        otro.style.display = 'none';
    }
}