/**
 * Este código adiciona event listeners a um elemento HTML com 
 * o id "meuInput". Quando o elemento ganha o "focus" (quando o 
 * usuário clica ou seleciona o elemento), uma classe "estilo1" 
 * é adicionada ao elemento usando o método classList.add. Quando 
 * o elemento perde o "focus" (quando o usuário clica fora do 
 * elemento), a classe "estilo1" é removida usando o método classList.remove.
 * 
 * A função 'verificaInput' irá selecionar o valor digitado no input, 
 * remover os espaços em branco nas extremidades da string e verificar se o 
 * comprimento da string é maior que 3. Se for, a classe "estilo2" 
 * será adicionada ao input, senão a classe "estilo3" será adicionada.
 */

const input = document.getElementById("meuInput");

input.addEventListener("focus", function() {
    input.classList.add("estilo1");
});

input.addEventListener("blur", function() {
    input.classList.remove("estilo1");
});

function verificaInput() {

    //seleciona o valor digitado
    const caractere = document.getElementById('meuInput').value;

    //limpar espaços em branco nas extremidas da string
    const caractereSemEspaco = caractere.trim();

    if (caractereSemEspaco.length > 3) {
        document.getElementById('meuInput').classList = 'estilo2';
    } else {
        document.getElementById('meuInput').classList = 'estilo3';
    }
}
