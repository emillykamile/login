let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector('form');
let textForm = document.getElementById('textForm');
let textEmail = document.getElementById('textEmail');

form.addEventListener('submit', (e) => {
    if(email.value == '' && password.value == '') {
        textForm.textContent = "Você precisa preencher todos os campos!"
    } else {
        console.log(email.value);
        console.log(password.value);
    }
    e.preventDefault()
})

email.addEventListener("keyup", () => {
    if(validatorEmail(email.value) !== true) {
        textEmail.textContent = "O formato do email deve ser: email.usuario@compasso.com.br"
    } else {
        textEmail.textContent = ''
    }
})


/* Validação ainda sem funcionar */
/* btn.addEventListener("submit", () => { 
    if(validatorEmail() == true && validatorPassword() == true)  {
        window.location.href = "./page-interna.html";
    }
}) */


function validatorEmail(email) {
    let emailPattern =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
  }

function validatorPassword(password) {
    let passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordPattern.test(password);
  }

