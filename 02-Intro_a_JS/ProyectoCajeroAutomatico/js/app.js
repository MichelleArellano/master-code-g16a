//Variable global
let accountSelected;
let totalMoney = 0;
let buttonLogin = document.getElementById("btn-login");
buttonLogin.disabled = true;

//Cuentas disponibles
const accounts = [
  { name: "Mali", money: 200 },
  { name: "Gera", money: 290 },
  { name: "Maui", money: 67 },
];

//Asignando nombres en las cards
for (let i = 0; i < accounts.length; i++) {
  if (accounts[i].name === "Mali") {
    document.getElementById("Mali").innerText = accounts[i].name;
  } else if (accounts[i].name === "Gera") {
    document.getElementById("Gera").innerText = accounts[i].name;
  } else if (accounts[i].name === "Maui") {
    document.getElementById("Maui").innerText = accounts[i].name;
  }
}

//Asignando el usuario al input del login
document.getElementById("btn-mali").onclick = function () {
  document.getElementById("user").value = "Mali";
  accountSelected = "Mali";
};
document.getElementById("btn-gera").onclick = function () {
  document.getElementById("user").value = "Gera";
  accountSelected = "Gera";
};
document.getElementById("btn-maui").onclick = function () {
  document.getElementById("user").value = "Maui";
  accountSelected = "Maui";
};

//Validar cuenta y contraseña
function validateAccount() {
  let passwordAccount = document.getElementById("password").value;
  // let buttonLogin = document.getElementById("btn-login");
  let checkBoxAccount = document.getElementById("accountCheck");

  if (passwordAccount === "" && !checkBoxAccount.checked) {
    checkBoxAccount.disabled = true;
    checkBoxAccount.checked = 0;
    buttonLogin.disabled = true;
  } else if (passwordAccount === "" && checkBoxAccount.checked) {
    checkBoxAccount.disabled = true;
    checkBoxAccount.checked = 0;
    buttonLogin.disabled = true;
  }

  if (passwordAccount === "") {
    console.log("ingresa una contraseña");
    buttonLogin.disabled = true;
    checkBoxAccount.disabled = true;
  } else {
    checkBoxAccount.disabled = false;
    if (checkBoxAccount.checked) {
      passwordAccount.disabled = true;
      buttonLogin.disabled = validatePassword(passwordAccount);
    } else if (!checkBoxAccount.checked) {
      buttonLogin.disabled = true;
      passwordAccount.disabled = false;
    } else {
      console.log("fallo");
    }
  }
}

//Validar contraseña
function validatePassword(pass) {
  let passMali = "@Mali123";
  let passGera = "@Gera123";
  let passMaui = "@Maui123";

  if (accountSelected === "Mali" && pass === passMali) {
    console.log("Bienvenida Mali");
    loadAccount(accountSelected);
    return false;
  } else if (accountSelected === "Gera" && pass === passGera) {
    console.log("Bienvenida Gera");
    loadAccount(accountSelected);
    return false;
  } else if (accountSelected === "Maui" && pass === passMaui) {
    console.log("Bienvenido Maui");
    loadAccount(accountSelected);
    return false;
  } else {
    openLogin = 0;
    return true;
  }
}

function reload() {
  document.getElementById("password").value = "";
  let checkBoxAccount = document.getElementById("accountCheck");
  checkBoxAccount.checked = 0;
  checkBoxAccount.disabled = true;
  buttonLogin.disabled = true;
}

//Asignando el dinero en las cuentas
function loadAccount(name) {
  document.getElementById("addAmount").value = 0;
  document.getElementById("restAmount").value = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accountSelected === "Mali" && accounts[i].name === "Mali") {
      document.getElementById(
        "nameAccount"
      ).innerText = `Bienvenida ${accounts[i].name}`;

      document.getElementById("userMoneyGeneral").value = accounts[i].money;
      document.getElementById("userMoneyStorage").value = accounts[i].money;
      document.getElementById("userMoneyRetire").value = accounts[i].money;
      let img = document.getElementById("img-profile-account");
      img.src = "img/woman1.svg";
      totalMoney = accounts[i].money;
    } else if (accountSelected === "Gera" && accounts[i].name === "Gera") {
      document.getElementById(
        "nameAccount"
      ).innerText = `Bienvenida ${accounts[i].name}`;
      document.getElementById("userMoneyGeneral").value = accounts[i].money;
      document.getElementById("userMoneyStorage").value = accounts[i].money;
      document.getElementById("userMoneyRetire").value = accounts[i].money;
      let img = document.getElementById("img-profile-account");
      img.src = "img/woman2.svg";
      totalMoney = accounts[i].money;
    } else if (accountSelected === "Maui" && accounts[i].name === "Maui") {
      document.getElementById(
        "nameAccount"
      ).innerText = `Bienvenido ${accounts[i].name}`;

      document.getElementById("userMoneyGeneral").value = accounts[i].money;
      document.getElementById("userMoneyStorage").value = accounts[i].money;
      document.getElementById("userMoneyRetire").value = accounts[i].money;
      let img = document.getElementById("img-profile-account");
      img.src = "img/man.svg";
      totalMoney = accounts[i].money;
    }
  }
}

//Depositos
function addMoney() {
  let money = document.getElementById("addAmount").value;

  if (money != "") {
    let amount = parseFloat(money);
    let sum = totalMoney + amount;
    if (sum < 990) {
      totalMoney = sum;
      document.getElementById("userMoneyStorage").value = totalMoney;
      sum = 0;
    } else {
      console.log("No puedes tener mas de $989, ingresa otra cantidad");
    }
    updateAccount();
  } else {
    console.log("Ingresa una cantidad válida");
  }
}

//Retiros
function restMoney() {
  let money = document.getElementById("restAmount").value;

  if (money === "") {
    console.log("Ingresa una cantidad válida");
  } else {
    let amount = parseFloat(money);
    // let rest = totalMoney - amount;

    if (totalMoney > 10 && amount > totalMoney) {
      console.log(
        `No puedes retirar, verifica tener más de $10 o tener saldo suficiente`
      );
    } else if (totalMoney > 10 && amount < totalMoney) {
      totalMoney = totalMoney - amount;
      document.getElementById("userMoneyRetire").value = totalMoney;
    } else if (amount === totalMoney) {
      console.log(`No puedes retirar todo el monto: ${amount}`);
    }
    updateAccount();
  }
}

//Actualizando
function updateAccount() {
  document.getElementById("userMoneyGeneral").value = totalMoney;
  document.getElementById("userMoneyStorage").value = totalMoney;
  document.getElementById("userMoneyRetire").value = totalMoney;
  document.getElementById("addAmount").value = 0;
  document.getElementById("restAmount").value = 0;
}
