let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector('form');
let textForm = document.getElementById('textForm');
let textEmail = document.getElementById('textEmail');

form.addEventListener('submit', (e) => {
    console.log(email.value);
    console.log(password.value);

    if(email.value == '' && password.value == '') {
        textForm.textContent = "Você precisa preencher todos os campos!"
    }
    else if(validatorEmail() !== true) {
        textEmail.textContent = "O formato do email deve ser: email.usuario@compasso.com.br"
    }
    else if(validatorPassword() !== true) {
        textEmail.textContent = "O formato de senha está errado"
    }
    else {
        window.location.href = "./page-interna.html";
    }
    e.preventDefault()
})

function validatorEmail() {
    console.log('VAL EMAIL');
    let emailPattern =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@compasso.com.br/;
    return emailPattern.test(email.value);
  }

function validatorPassword() {
    console.log('VAL PASS');
    let passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordPattern.test(password.value);
  }



