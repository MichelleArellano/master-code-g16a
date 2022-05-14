//Variable global
let accountSelected;
let openLogin = 0;

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
    accountSelected = 'Mali';
}
document.getElementById('btn-gera').onclick = function(){
    document.getElementById('user').value = 'Gera';
    accountSelected = 'Gera';
}
document.getElementById('btn-maui').onclick = function(){
    document.getElementById('user').value = 'Maui';
    accountSelected = 'Maui';
}

//Validar cuenta y contraseña
function validateAccount(){
    let passwordAccount = document.getElementById('password').value;
    let buttonLogin = document.getElementById('btn-login');
    let checkBoxAccount = document.getElementById('accountCheck');


    if(passwordAccount=== "" && !checkBoxAccount.checked){
        checkBoxAccount.disabled = true;
        checkBoxAccount.checked = 0;
    }else if(passwordAccount === "" && checkBoxAccount.checked){
        checkBoxAccount.disabled = true;
        checkBoxAccount.checked = 0;
    }

    if(passwordAccount === ""){
        console.log('ingresa una contraseña');
        buttonLogin.disabled = true;
        checkBoxAccount.disabled = true;
    }else{
        checkBoxAccount.disabled = false;
        if(checkBoxAccount.checked){
            passwordAccount.disabled = true;
            buttonLogin.disabled = validatePassword(passwordAccount);
        }else if(!checkBoxAccount.checked){
            buttonLogin.disabled = true;
            passwordAccount.disabled = false;
        }else{
            console.log('fallo');
        }
    }
}

//Validar contraseña
function validatePassword(pass){
    let passMali = '@Mali123';
    let passGera = '@Gera123';
    let passMaui = '@Maui123';

    if(accountSelected === 'Mali' && pass === passMali){
        console.log('Bienvenida Mali');
        return false;
    }else if(accountSelected === 'Gera' && pass === passGera){
        console.log('Bienvenida Gera');
        return false;
    }else if(accountSelected === 'Maui' && pass === passMaui){
        console.log('Bienvenido Maui');
        return false;
    }else{
        openLogin = 0;
        return true;
    }
}

function reload(){
    document.getElementById('password').value = "";
}