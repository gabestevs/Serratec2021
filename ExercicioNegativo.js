const ler = require("prompt-sync")();

var divida = ler("Digite o valor da sua divida em numeros negativos: ");

divida = Math.abs(divida);

console.log("O valor do emprestimo será de: ", divida);