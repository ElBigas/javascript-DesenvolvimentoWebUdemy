/**
 * Esta função modifica a classe CSS do elemento HTML com o ID 
 * "mensagem". A função seleciona o elemento usando 
 * o método 'document.getElementById', e depois muda a 
 * propriedade 'className' do elemento para "estilo2". Isso 
 * aplicará os estilos definidos na classe CSS "estilo2" 
 * ao elemento com o ID "mensagem".
 */

function modificaClasse() {

    const botao = document.getElementById('mensagem');

    botao.className = 'estilo2';
}