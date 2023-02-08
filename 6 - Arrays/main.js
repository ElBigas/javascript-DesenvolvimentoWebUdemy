/**
 * função 'adiocinaObjeto' verifica se o valor inserido é válido ou se já existe 
 * na lista de objetos, e caso seja válido e não exista, adiciona ao fim da lista. 
 * A função ordenaLista ordena a lista de objetos em ordem alfabética.
 */

var objetos = Array('Cadeira', 'Impressora', 'Garfo');

function adiocinaObjeto() {

    const elemento = document.getElementById('paragrafo');

    elemento.textContent = '';

    const input = document.getElementById('entrada').value.trim();

    if (!input) {

        elemento.textContent += 'Informe um valor válido!';
    } else if (objetos.includes(input)) {

        elemento.textContent += `O objeto "${input}" já existe na lista!`;
        document.getElementById('entrada').value = '';
    } else {

        objetos.push(input);
        elemento.textContent += `Objeto "${input}" adiocinado na lista!`;
        document.getElementById('entrada').value = '';
    }

    console.log(input);

}

function ordenaLista() {

    objetos.sort();
    console.log(objetos);
}