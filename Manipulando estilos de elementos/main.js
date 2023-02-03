function distribiuCaractere() {

    //seleciona o valor digitado
    var caractere = document.getElementById('entrada').value;

    //limpa campo de digitação
    document.getElementById('entrada').value = '';

    //limpar espaços em branco nas extremidas da string
    caractere.trim();

    if (caractere == '0' ||
        caractere == '1' ||
        caractere == '2' ||
        caractere == '3' ||
        caractere == '4' ||
        caractere == '5' ||
        caractere == '6' ||
        caractere == '7' ||
        caractere == '8' ||
        caractere == '9') {
        document.getElementById('numeros').value += caractere;
    } else {
        document.getElementById('letras').value += caractere;
    }
}