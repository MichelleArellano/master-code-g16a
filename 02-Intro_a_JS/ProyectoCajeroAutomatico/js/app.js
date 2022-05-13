//Cuentas disponibles
const cuentas = [
    {nombre: "Mali", saldo: 200},
    {nombre: "Gera", saldo: 290},
    {nombre: "Maui", saldo: 67}
];

//Asignando nombres en las cards
for(let i = 0; i < cuentas.length; i++){
    if(cuentas[i].nombre === "Mali"){
        document.getElementById('Mali').innerText = cuentas[i].nombre;
    }else if(cuentas[i].nombre === "Gera"){
        document.getElementById('Gera').innerText = cuentas[i].nombre;
    }else if(cuentas[i].nombre === "Maui"){
        document.getElementById('Maui').innerText = cuentas[i].nombre;
    }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()
