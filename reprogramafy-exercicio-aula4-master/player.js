var audio = document.querySelector('audio');
var botaoPlay = document.querySelector('.botao-play');


botaoPlay.onclick = function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

audio.onplay = function () {
    console.log("DEU PLAY!");
}

audio.onpause = function () {
    console.log("DEU PAUSE!");
}

audio.ontimeupdate = function () {
    var porcentagem = (audio.currentTime / audio.duration) * 100;
    var tocado = document.querySelector('.tocado');
    tocado.style.width = porcentagem + '%';

    var duracaoAtual = Math.round(audio.currentTime); //var para arredondar o tempo
    var spanTempoAtual = document.querySelector('.tempo-atual'); //var para pegar o conteúdo da .tempoAtual

    var data = new Date(2017, 0, 1);
    data.setSeconds(duracaoAtual);
    // spanTempoAtual.innerText = duracaoAtual; transforma o texto do 00:00 na duração atual
    spanTempoAtual.innerText = data.getMinutes().toString().padStart(2, '0') +':'+ data.getSeconds().toString().padStart(2, '0');
}

