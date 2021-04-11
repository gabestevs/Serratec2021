/*O programa "Educado" irá perguntar o seu nome, e também como você gostaria de ser chamado. Depois disso, uma saudação para você aparece na tela.
*/

//Início do Programa
const prompt = require('prompt-sync')();
var nome = prompt('\tOlá, qual o seu nome?  ');
var apelido = prompt('\tComo você gostaria de ser chamado?  ');

//Saída
console.log('\tOlá ' + nome + ', também conhecido(a) como ' + apelido + '.\n\t Seja Bem Vindo!');