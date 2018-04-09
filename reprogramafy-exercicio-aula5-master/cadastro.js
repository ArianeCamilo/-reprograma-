var botaoCadastro = document.getElementById("botaoCadastro");
var modalCadastro = document.getElementById("modalCadastro");
var fundoCadastro = document.getElementById("fundoCadastro");
var botao_fecharCadastro = document.getElementById("close-crossCadastro");


botaoCadastro.onclick = function() {
    // modal.classList.add("visivel");
    fundoCadastro.classList.add("visivel");
}

botao_fecharCadastro.onclick = function () {    
    // modal.classList.remove("visivel");
    fundoCadastro.classList.remove("visivel");
}

fundoCadastro.onclick = function(e) {
    if (e.target == fundoCadastro) { //para o modal ficar clicável apenas no "X"
    // modal.classList.remove("visivel");
    fundoCadastro.classList.remove("visivel");
    }
}


//Selecionar o formulário
var formCadastro = fundoCadastro.querySelector('form');

    formCadastro.onsubmit = function(e){
        var userCadastro = document.querySelector('#userCadastro');
        var emailCadastro = document.querySelector('#emailCadastro');
        var senhaCadastro = document.querySelector('#senhaCadastro');

        //seleciona a modal
        var modalCadastro = document.querySelector("#modalCadastro");

        localStorage.user = userCadastro.value;
        localStorage.email = emailCadastro.value;
        localStorage.senha = senhaCadastro.value;

        
        
        
        var usuarios = JSON.parse(localStorage.usuarios || "[]");

        usuarios.push({
        user: userCadastro.value,
        email: emailCadastro.value,
        senha: senhaCadastro.value,
        });

      localStorage.usuarios = JSON.stringify(usuarios);
}


