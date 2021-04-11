// No programa “Veja os números pares”, o console apresentará uma frase com os números pares entre 2 e 10,
// separados por vírgula e na mesma linha. A frase termina com ponto, não com vírgula.
// Após escrever a frase, o sistema pede para continuar, e a cada confirmação,
// exibe a nova mensagem na sequência (entre 12 e 20 etc).

const ler = require('prompt-sync')();

var ultimoElemento = 10;
var deveContinuar = true;

var sequencia = [];
for (elemento = 2; elemento <= ultimoElemento; elemento++) {
    if (elemento % 2 === 0) {
        sequencia.push(elemento);
    }

    if (elemento == ultimoElemento) {
        console.log('Sequencia %s.', sequencia.join(', '));
        console.log('Deve continuar? (S/N)');
        let continueLoop = ler('~> ');

        deveContinuar = (continueLoop.toUpperCase() === 'S' ? true : false);
        sequencia = [];
        ultimoElemento = (ultimoElemento  + 10);
    }

    if (!deveContinuar) {
        break;
    }
}