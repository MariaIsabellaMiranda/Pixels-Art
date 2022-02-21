const quadro = document.querySelector('#pixel-board');
const paleta = document.querySelector('#color-palette');
let cor = 'rgb(0, 0, 0)';
const botao = document.querySelector('#clear-board');

window.onload = function() {
  criaQuadro();
}
  function criaQuadro(){
    for (let index = 0; index < 5; index += 1) {
      let linha = document.createElement('section');
      quadro.appendChild(linha);
      for (let index2 = 0; index2 < 5; index2 += 1) {
        let novoPixel = document.createElement('div');
        novoPixel.className = ('pixel');
        linha.appendChild(novoPixel);
      }
    }
  }

  paleta.addEventListener('click', function(event){
   const el = event.target;
   if (el === paleta) {
     return;
   }
   const previousSelected = document.querySelector('.selected');
   previousSelected.classList.remove('selected');
   el.classList.add('selected');
   cor = getComputedStyle(el).backgroundColor;
  })
  
  quadro.addEventListener('click', function(event){
    const el = event.target;
    if (el.classList.contains('pixel')) {
      el.style.backgroundColor = cor;
    };
  });

  botao.addEventListener('click', function(){
    quadro.innerHTML = null;
    criaQuadro();
  });