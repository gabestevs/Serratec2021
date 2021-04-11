/*O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir
*/

//Início do Programa
const ler = require("prompt-sync")();
const capacidadeMaxima = 20;
//Entrada
var pessoasNaLoja = ler("   Digite a quantidade de pessoas na loja ");
//Processamento
var autorizacao = pessoasNaLoja <= capacidadeMaxima;
//Saída
console.log("\tAutorizado a entrada ?" + (autorizacao ? ' Sim' : ' Não'));