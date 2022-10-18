var form = document.querySelector("#form-action");
var email = document.querySelector("#email");
var senha = document.querySelector("#senha");
var btn = document.getElementById("#botao-continuar");


form.addEventListener("submit", (l)=>{
    
    var usuario = email.value;
    var senha = senha.value;

    if(usuario.value === ' ' && senha === ' '){
        usuario.style.borderColor = "#E9B425";
        senha.style.borderColor = "#E9B425";

    }else{
        if(usuario.value === 'admin@admin.com.br' && senha ==='admin'){
            window.location.href = "./page-interna.html";
        }
        else{
            btn-continuar.preventDefault();
            console.log("Senha ou usuário inválidos!")
            var alert = document.querySelector(".alert");
            alert.innerText = "Senha ou usuário inválidos!"
            alert.classList.add("alert");
        }
    })