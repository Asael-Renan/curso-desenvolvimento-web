var altura = 0
var largura = 0
var vidas = 1
var tempo = 20
var velocidade = 0

var nivel = window.location.search.replace('?', '')

if (nivel === 'normal') {
    velocidade = 1500
} else if(nivel === 'dificil') {
    velocidade = 1000
} else if (nivel === 'chuck-norris') {
    velocidade = 750
} else if (nivel === 'anime') {
    velocidade = 100
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function () {

    document.getElementById('cronometro').innerHTML = tempo
    tempo--

    if (tempo < 0) {
        window.location.href = 'vitoria.html'
        clearInterval(cronometro)
        clearInterval(criaMosquito)
    }

}, 1000)

function configuracaoMosquito() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        
        if (vidas > 3) {
            window.location.href = 'game_over.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }

    
    
    var posicaoY = Math.floor(Math.random() * altura) -90
    var posicaoX = Math.floor(Math.random() * largura) -90
    posicaoX = posicaoX < 5 ? 5 : posicaoX
    posicaoY = posicaoY < 5 ? 5 : posicaoY

    //criar o elemento html

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito) 
    mosquito.id = 'mosquito'
    mosquito.onclick = function (){
        this.remove()
    }

    //tamanho randomico

    var tamanho = Math.floor(Math.random() * 30) + 50
    mosquito.style.width = tamanho + 'px'
    mosquito.style.height = tamanho + 'px'

    //lado aleatorio

    var lado = Math.round(Math.random())
    switch (lado) {
        case 0:
            mosquito.style.transform = 'scaleX(1)'
            break
        case 1:
            mosquito.style.transform = 'scaleX(-1)'
            break
    }
}

configuracaoMosquito()