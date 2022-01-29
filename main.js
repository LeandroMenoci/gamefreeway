function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop()
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  velocidade();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}