if (localStorage.usuario){
    var botao = document.querySelector("#botao");
    botao.innerText = localStorage.email;
}else{
    alert("Não autorizado!");   
}

//validação da tela de login - não é o nome do usuário!!!!