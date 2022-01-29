
// código do carro
let velocidadeCarros0 = 2;
let velocidadeCarros1 = 2.5;
let velocidadeCarros2 = 3.5;
let velocidadeCarros3 = 2.3;
let velocidadeCarros4 = 2;
let velocidadeCarros5 = 3.9;

let yCarros = [40, 96, 150, 210, 270, 318];
let xCarros = [600, 600, 600, 600, 600, 600]

// variáveis dos carros
let larguraCarro = 50;
let alturaCarro = 40;


function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
  }
}

function movimentaCarro() {
  xCarros[0] -= velocidadeCarros0;
  xCarros[1] -= velocidadeCarros1;
  xCarros[2] -= velocidadeCarros2;
  xCarros[3] -= velocidadeCarros3;
  xCarros[4] -= velocidadeCarros4;
  xCarros[5] -= velocidadeCarros5;
}




function velocidade() {
  while (xCarros[0] < -50) {
    xCarros[0] = 600;
    velocidadeCarros0 = Math.floor(Math.random() * 5) + 2;
  }
  while (xCarros[1] < -50) {
    xCarros[1] = 600;
    velocidadeCarros1 = Math.floor(Math.random() * 5) + 2.5;
  }
  while (xCarros[2] < -50) {
    xCarros[2] = 600;
    velocidadeCarros2 = Math.floor(Math.random(1.5) * 5) + 3;
  }
  while (xCarros[3] < -50) {
    xCarros[3] = 600;
    velocidadeCarros3 = Math.floor(Math.random() * 5) + 2;
  }
  while (xCarros[4] < -50) {
    xCarros[4] = 600;
    velocidadeCarros4 = Math.floor(Math.random() * 5) + 3;
  }
  while (xCarros[5] < -50) {
    xCarros[5] = 600;
    velocidadeCarros5 = Math.floor(Math.random(1.5) * 6) + 4;
  }
}

