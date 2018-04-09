var botao = document.getElementById("botao");
var modal = document.getElementById("modal");
var fundo = document.getElementById("fundo");
var botao_fechar = document.getElementById("close-cross");

botao.onclick = function () {
    // modal.classList.add("visivel");
    fundo.classList.add("visivel");
}

botao_fechar.onclick = function () {
    // modal.classList.remove("visivel");
    fundo.classList.remove("visivel");
}

fundo.onclick = function (e) {
    if (e.target == fundo) { //para o modal ficar clicável apenas no "X"
        // modal.classList.remove("visivel");
        fundo.classList.remove("visivel");
    }
}

//Login
var email = document.getElementById('email');
var senha = document.getElementById('senha');
var formulario = document.querySelector('form');

formulario.onsubmit = function () {

    var usuarios = JSON.parse(localStorage.usuarios);
    var correto;

    for (var i = 0; i < usuarios.length; i++) {
        if(usuarios[i].email === email.value && usuarios[i].senha === senha.value){
        correto = true;
        break;
        localStorage.usuario = usuarios[i].email;
        }
    }
    if (!correto) {
        modal.classList.add('erro');

        setTimeout(function () {
            modal.classList.remove('erro');
        }, 1000);
        return false;
    }
}


// validar apenas 1 usuário
// if (email.value !== localStorage.email || senha.value !== localStorage.senha) {
//     alert('Dados incorretos');
//     modal.classList.add('erro');




