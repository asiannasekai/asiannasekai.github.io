let paleta_fundo = "#1d1d1b";
let paleta_contorno = "#f2f2e7";
let paleta_cores = [
  "#ffb000",
  "#ff4200",
  "#7da030",
  "#ff99cc",
  "#1d1d1b",
  "#f2f2e7",
];

let seno_escala = 0.01;

let grade_coluna_qtd;
let grade_linha_qtd;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeJoin(ROUND);
  
  grade_coluna_qtd = floor(random(3, 7));
  let modulo_tamanho = width / grade_coluna_qtd;
  grade_linha_qtd = ceil(height / modulo_tamanho);
  
  semente = random(1000);

  describe('Interactive fractal visuals with geometric shapes and dynamic animations.');
}

function draw() {
  background(paleta_fundo); // Match the palette
  randomSeed(semente);
  grade(0, 0, grade_coluna_qtd, grade_linha_qtd, width);
}

function grade(x_inicial, y_inicial, coluna_qtd, linha_qtd, largura_total) {
  stroke(paleta_contorno);
  strokeWeight(2);
  
  let modulo_tamanho = largura_total / coluna_qtd;
  let movimento_diferencial = 0;
  for (let j = 0; j < linha_qtd; j++) {
    for (let i = 0; i < coluna_qtd; i++) {
      let x = x_inicial + i * modulo_tamanho;
      let y = y_inicial + j * modulo_tamanho;
      
      let cor_indice = floor(random(paleta_cores.length - 1));
      fill(paleta_cores[cor_indice]);
      rect(x, y, modulo_tamanho, modulo_tamanho);
      fill(paleta_cores[(cor_indice + 1) % paleta_cores.length]);
      
      let movimento = map(sin(frameCount * seno_escala + movimento_diferencial), -1, 1, 0, 1);
      
      let seletor = floor(random(6 + 3));
      if (seletor === 0) {
        let raio_externo = modulo_tamanho / 2 - 5;
        let raio_interno = raio_externo * movimento;
        let pontas_qtd = [4, 6, 8, 10, 12, 14, 16, 18][floor(random() * 8)];
        estrela(x + modulo_tamanho / 2, y + modulo_tamanho / 2, raio_interno, raio_externo, pontas_qtd, 0);
      }
      
      if (seletor === 1) {
        let diametro = random(modulo_tamanho / 2, modulo_tamanho) * movimento;
        circle(x + modulo_tamanho / 2, y + modulo_tamanho / 2, diametro);
      }
      
      if (seletor === 2) {
        let pontas = [3, 5, 7, 9, 11, 13][floor(random(6))];
        let pontas_altura = map(movimento, 0, 1, 0.2, 0.8);
        coroa_dupla(x, y, modulo_tamanho, modulo_tamanho, pontas, pontas_altura);
      }
      
      if (seletor === 3) {
        let haste_largura = map(movimento, 0, 1, 0.2, 0.8);
        machado(x, y, modulo_tamanho, modulo_tamanho, haste_largura);
      }
      
      if (seletor === 4) {
        let abertura_largura = random(0.4, 1) * movimento;
        losango(x, y, modulo_tamanho, modulo_tamanho, abertura_largura);
      }
      
      if (seletor >= 5 && modulo_tamanho > 60) {
        grade(x, y, 2, 2, modulo_tamanho);
      }
      movimento_diferencial += 1;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Include your existing shape functions (estrela, coroa_dupla, machado, losango) here.

