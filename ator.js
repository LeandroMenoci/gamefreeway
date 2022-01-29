// variáveis do Ator
let yAtor = 366;
let xAtor = 85;
let larguraAtor = 30;
let alturaAtor = 30;
let colisao = false;
let meusPontos = 0;


function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  } else if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }
  }
}

function podeSeMover() {
  return yAtor < 366;
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao) {
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 366;
}

function incluiPontos() {
  textSize(25);
  textAlign(CENTER);
  fill(color(255, 240, 0))
  text(meusPontos, width / 5, 27)
}

function marcaPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    somDosPontos.play()
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0
}