let signupDiv = document.querySelector(".signup");
let loginDiv = document.querySelector(".login");
let savedAccounts = [];

function loginSwitch() {
  if (signupDiv.classList.contains("d-flex")) {
    signupDiv.classList.replace("d-flex", "d-none");
    loginDiv.classList.replace("d-none", "d-flex");
  } else if (loginDiv.classList.contains("d-flex")) {
    signupDiv.classList.replace("d-none", "d-flex");
    loginDiv.classList.replace("d-flex", "d-none");
  }
}

let signEmail = document.querySelector("#signup-email");
let signPass = document.querySelector("#signup-password");
let confPass = document.querySelector("#signup-confirm");
function addAccount() {
  if (signEmail.value === "" || signPass.value === "") {
    alert("enter valid email or password");
  } else {
    if (signPass.value !== confPass.value) {
      alert("Passwords must be matched");
    } else {
      let isAlreadyRegisted = savedAccounts.findIndex(
        (ele) => ele.email === signEmail.value
      );
      if (isAlreadyRegisted === -1) {
        let obj = {
          email: signEmail.value,
          password: signPass.value,
        };
        savedAccounts.push(obj);
        alert("account added succesfuly ,Go to login");
      } else {
        alert("account already registered");
      }
    }
  }
}

let logEmail = document.querySelector("#login-email");
let logPass = document.querySelector("#login-password");
function loginAcc() {
  let isAccFound = savedAccounts.findIndex(
    (ele) => ele.email == logEmail.value
  );
  if (isAccFound === -1) {
    alert("account not register");
  } else {
    if (logPass.value === savedAccounts[isAccFound].password) {
      console.log("login success");
    } else {
      alert("wrong Password ");
    }
  }
}
