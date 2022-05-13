//Cuentas disponibles
const accounts = [
    {name: "Mali", money: 200},
    {name: "Gera", money: 290},
    {name: "Maui", money: 67}
];

//Asignando nombres en las cards
for(let i = 0; i < accounts.length; i++){
    if(accounts[i].name === "Mali"){
        document.getElementById('Mali').innerText = accounts[i].name;
    }else if(accounts[i].name === "Gera"){
        document.getElementById('Gera').innerText = accounts[i].name;
    }else if(accounts[i].name === "Maui"){
        document.getElementById('Maui').innerText = accounts[i].name;
    }
}

//Asignando el usuario al input del login
document.getElementById('btn-mali').onclick = function(){
    document.getElementById('user').value = 'Mali';
}
document.getElementById('btn-gera').onclick = function(){
    document.getElementById('user').value = 'Gera';
}
document.getElementById('btn-maui').onclick = function(){
    document.getElementById('user').value = 'Maui';
}

//Validar cuenta y contraseña
function validatePassword(){
    let button = document.getElementById('btn-login');
    if(document.getElementById('accountCheck').checked){
        button.disabled = false;
    }else if(!document.getElementById('accountCheck').checked){
        button.disabled = true;
    }else{
        console.log('fallo');
    }
    
}
