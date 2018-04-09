// var botao = document.getElementById("btnCadastrar");
// botao.onclick = function(event){
// event.preventDefault();
// alert("mensaem marota");

// };

// $("#btnCadastrar").click(function(event){
//     event.preventDefault();
//     alert("mensagem marota");
// });

var comecou = false;
var letrasChutadas = [];
var palavra = "";

$("#cadastro button").click(function (event) {
    event.preventDefault(); //impedir a página de recarregar
    //Declarar variável palavra com o valor do input
   palavra = $("#palavra").val(); //pega o valor pela id
    //Veruficar se o campo está vazio
    if (palavra === "") {
        //Se estiver vazio mostra uma msg de erro
        alert("Por favor, preencha o campo");
    } else {
        //Se não estiver vazio, mostrar os underlines
        for (i = 0; i < palavra.length; i++) {
            var span = $("<span>" + palavra[i] + "</span>");
            span.appendTo(".letras");
        }
        //Se não estiver vazio, mostrar a tela forca
        //Adicionar classe visível na tela da forca
        $("#forca").addClass("visivel");
        //Remover a classe na tela do cadastro
        $("#cadastro").removeClass("visivel");
        comecou = true;
    }
});

$(document).keydown(function (event) { //pega o que for digitado em qualquer parte da tela (document)
    
    if (comecou){ 
    var letra = event.key; // key é um dos vários parâmetros da variável (contém as teclas digitadas pra formar a string)
    if(letra.length > 1){ // verificar se a letra não é maior que 1 espaço, ou seja, não é algo diferente de letra (ex: "enter")
    return;
    }
    
    //Vai verificar se a letra já foi utilizada - se está contida no array ou não
    if(letrasChutadas.indexOf(letra) != -1){
        return;
    }

    //Registrar a letra utilizada
    letrasChutadas.push(letra); //coloca as informações dentro do array
    var span = $("<span>" + letra + "</span>");
    span.appendTo(".letras-usadas");
    
    //Letra existe na palavra cadastrada?
    if(palavra.indexOf(letra) != -1){ 
    
    //Se sim, 
        //mostra no campo a letra correspondente
        for (var i = 0; i < palavra.length; i++){
            var letra2 = palavra[i];
            //Se a letra que pressionei for igual à letra que estou iterando
            if(letra == letra2){
                // "i" é o índice que temos que mostrar na tela
                $(".letras span").eq(i).addClass("visivel");
            }
        }
        //Se a palavra estiver completa
            //Mostra o final correto
    }else{

    }
    //Se não, 
        //mostra a parte do corpo do boneco
        //Se excedeu as tentativas
            //Mostra a família triste
    }
});