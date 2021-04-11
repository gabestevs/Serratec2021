/*Vou tomar a tabuada!
* O aluno de matemática escolhe o número, e o sistema lhe ensina a contar.
*/


const prompt = require('prompt-sync')();
var numero = Number(prompt('Digite um número: '));

for(i = 0; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`);
}