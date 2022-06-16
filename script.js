const quadro = document.querySelector('#pixel-board');
const paleta = document.querySelector('#color-palette');
let cor = 'rgb(0, 0, 0)';
const botaoLimpar = document.querySelector('#clear-board');
const botaoInput = document.querySelector('#generate-board');
const input = document.querySelector('#board-size');

function criaQuadro(numeroQuadrados) {
  quadro.innerHTML = null;
  for (let index = 0; index < numeroQuadrados; index += 1) {
    const linha = document.createElement('section');
    quadro.appendChild(linha);
    for (let index2 = 0; index2 < numeroQuadrados; index2 += 1) {
      const novoPixel = document.createElement('div');
      novoPixel.className = ('pixel');
      linha.appendChild(novoPixel);
    }
  }
}

paleta.addEventListener('click', (event) => {
  const el = event.target;
  if (el === paleta) {
    return;
  }
  const previousSelected = document.querySelector('.selected');
  previousSelected.classList.remove('selected');
  el.classList.add('selected');
  cor = getComputedStyle(el).backgroundColor;
});

quadro.addEventListener('click', (event) => {
  const el = event.target;
  if (el.classList.contains('pixel')) {
    el.style.backgroundColor = cor;
  }
});

function recalculaQuadro() {
  const numeroQuadrados = Number(input.value);
  if (numeroQuadrados < 5) {
    return criaQuadro(5);
  } if (numeroQuadrados > 50) {
    return criaQuadro(50);
  }
  criaQuadro(numeroQuadrados);
}

botaoLimpar.addEventListener('click', () => {
  const classQuadrados = document.querySelectorAll('.pixel');
  classQuadrados.forEach((arrayQuadrados) => {
    const quadrado = arrayQuadrados;
    quadrado.style.backgroundColor = 'white';
  });
});

botaoInput.addEventListener('click', () => {
  if (!input.value) {
    alert('Board inválido!');
  } else {
    recalculaQuadro();
  }
});

function coresAleatorias() {
  const cores = document.querySelectorAll('.color');
  for (let i = 1; i <= 3; i += 1) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    cores[i].style.backgroundColor = `rgb( ${red}, ${green}, ${blue})`;
  }
}

window.onload = () => {
  criaQuadro(5);
  coresAleatorias();
};
