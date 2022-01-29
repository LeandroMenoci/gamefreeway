// imagens e sons do jogo
let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDosPontos;


function preload() {
  imagemEstrada = loadImage("material/estrada.png");
  imagemAtor = loadImage("material/ator-1.png");
  imagemCarro = loadImage("material/carro-1.png");
  imagemCarro2 = loadImage("material/carro-2.png");
  imagemCarro3 = loadImage("material/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];

  somDaTrilha = loadSound("material/sons/trilha.mp3");
  somDaColisao = loadSound("material/sons/colidiu.mp3");
  somDosPontos = loadSound("material/sons/pontos.wav");
}