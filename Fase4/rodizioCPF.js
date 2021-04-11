/*A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será utilizado para permitir a entrada nas lojas. CPF final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares.
*/

// Dia (hoje - leitura da data do pc)
// CPF (apos o hífen)
// Autorizado a entrar na loja: false

//Colocando estilo no terminal

const ler = require("prompt-sync")();

const diaHoje = (new Date().getDay());
var finalCPF = parseInt(ler("Digite o ultimo digito do seu cpf: "));

if (isNaN(finalCPF)) {
    console.log('\nApenas números podem ser usados\n');
    return
}

var autorizado = (diaHoje % 2) == (finalCPF % 2);

console.log("\t\nAutorizado a entrar na loja? " + (autorizado ? "Sim" : "Não\n"));