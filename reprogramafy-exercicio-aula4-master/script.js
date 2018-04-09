var botao = document.getElementById("botao");
var modal = document.getElementById("modal");
var fundo = document.getElementById("fundo");
var botao_fechar = document.getElementById("close-cross");

botao.onclick = function() {
    // modal.classList.add("visivel");
    fundo.classList.add("visivel");
}

botao_fechar.onclick = function () {    
    // modal.classList.remove("visivel");
    fundo.classList.remove("visivel");
}

fundo.onclick = function(e) {
    if (e.target == fundo) { //para o modal ficar clicável apenas no "X"
    // modal.classList.remove("visivel");
    fundo.classList.remove("visivel");
    }
}

//Login
var email = document.getElementById('email');
var senha = document.getElementById('senha');
var formulario = document.querySelector('form');

formulario.onsubmit = function() {
    if(email.value !== 'admin@admin.com' && senha.value !== 'admin') {
        alert('Dados incorretos');
        modal.classList.add('erro');
        setTimeout(function(){            
        }, 1000);
        return false;
    }
    localStorage.usuario = email.value;
}


