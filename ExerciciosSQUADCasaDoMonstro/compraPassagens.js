// menores de 18 não podem efetuar a compra da passagem
// O usuario tem duas opções, classe economica e primeira classe
// exibir ao usuario a lista de companhias disponiveis para o seu destino 
// e selecionar destino e data da viagem

const ler = require('prompt-sync')();

var nome = ler('Digite o seu nome: ');
var idade = ler('Digite a sua idade: ');

if (isNaN(idade)) {
    throw new Exception('Digite uma idade válida');
}

if (idade < 18) {
    console.log('Proibida a venda da passagens para menores de 18 anos. ' + nome);
} else {
    console.log('Qual o destino da viagem?');
    var destino = ler('-> ');

    console.log('Destino ' + destino + ' selecionado com sucesso. \n');
    console.log('\t 1 - TAP \n\t 2 - LATAM \n\t 3 - AMERICA AIRLINES');

    console.log('Selecione a companhia que deseja dentre as opções:');
    var resposta = ler('-> ');
}

if (resposta === 1 || resposta === 2 || resposta === 3) {
    console.log('1 - primeira classe \n 2 - classe economica');
    console.log('Selecione a Classe que deseja:');
    var classe = ler('-> ');
}

console.log('Qual a data desejada para a viagem (formato mês/dia/ano):');
var rawDate = ler('-> ');
var validDate = new Date(rawDate).toDateString();

if (validDate === "Invalid Date") {
    throw new Exception('Digite uma data válida');
}

console.log('Sua passagem será para o dia: ' + validDate);

console.log('Senhor(a) '+ nome + ' confirma essa reserva? \n Responda S ou N');
var confirma = ler('-> ');

if (confirma === 'S') {
    console.log('Pronto, sua passagem foi reservada com sucesso, Boa viagem!');
} else {
    console.log('Sua passagem não foi confirmada');
}

