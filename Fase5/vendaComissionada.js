/* Os "vendedores comissionados" recebem 5% do valor de cada produto vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um adicional de 9% sobre o excedente. Seu programa irá receber o valor total de vendas e emitir o recibo de comissão.
*/

//Colocando cor no terminal

const ler = require("prompt-sync")();

console.log ("\n\nDigite o Valor total de vendas:");
let totalDeVendas = parseInt(ler('~> '));
const METADEVENDAS= 5000.00;
var comicaoPorVenda = totalDeVendas * 0.05;
var  adicional=0.0;

if (totalDeVendas > METADEVENDAS){
    adicional = (totalDeVendas - METADEVENDAS ) * 0.09;
}

console.log ("Sua comisão: " + comicaoPorVenda.toFixed(2) + '\n');
console.log ("Valor adicional: " + adicional.toFixed(2));