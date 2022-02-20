let quadro = document.querySelector('#pixel-board');

for (let index = 0; index < 5; index += 1) {
    let linha = document.createElement('section')
    quadro.appendChild(linha);
    for (let index2 = 0; index2 < 5; index2 += 1) {
        let novoPixel = document.createElement('div');
        novoPixel.className = ('pixel');
        linha.appendChild(novoPixel);
    }
}