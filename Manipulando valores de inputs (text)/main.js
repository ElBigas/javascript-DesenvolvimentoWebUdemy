/**
 * Este código seleciona todos os elementos 'button' na página HTML 
 * atual e, para cada um deles, adiciona um ouvinte de evento click. 
 * Quando um botão é clicado, a função 'modificaCor' é chamada 
 * com o conteúdo de texto do botão como argumento e altera a 
 * cor de fundo do elemento com id "quadrado" para a cor especificada.
 */

const botoes = document.querySelectorAll('button');

botoes.forEach(elemento => {
    elemento.addEventListener('click', (evento) => {
        modificaCor(evento.target.textContent)
    });
});

function modificaCor(cor) {

    const quadrado = document.getElementById('quadrado')
    quadrado.style.backgroundColor = cor;
}
