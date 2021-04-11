const prompt  = require("prompt-sync")();
var celsius = prompt("Digite uma temperatura em graus celsius: ");

var resultado = (celsius * 9) / 5 + 32;

console.log("A temperatura de onde você está em fahrenheit é: ", resultado);