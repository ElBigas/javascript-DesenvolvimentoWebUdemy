/**
 * Este código cria uma lista de frutas usando o laço 'for', seguido por 
 * uma tabela de multiplicação feita com o laço 'while'. A lista de frutas 
 * é inicialmente declarada e, em seguida, um laço 'for' é usado para escrever
 * cada fruta na página.

 * Depois disso, há uma tabela de multiplicação sendo gerada pelo laço 'while'. 
 * O primeiro laço 'while' é usado para controlar as linhas da tabela e o 
 * segundo laço 'while' é usado para controlar as colunas. A tabela é gerada 
 * escrevendo o resultado da multiplicação da linha atual por cada coluna.
 */

var lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva', ];


for (var y = 0; y < lista_frutas.length; y++) {

    document.write(lista_frutas[y] + '<br /><br />')

}

var x = 1;
var y = 1;

while (x <= 10) {

    y = 1;
    
    while(y <= 10) {
        document.write(x + " X " + y + " = " + (x*y))
        document.write("<br/> ")
        y++;
    }

    x++;
    document.write("<hr/> ")
}
