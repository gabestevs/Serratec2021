// EXERCICIO DA GABB

/* Cabeleireira Leila: cabelos, unhas, hidratação e unha. Cabeleireira Leila: venha fazer suas unhas, seus cabelos,
e até mesmo hidratar suas madeixas de cabelo conosco. Tudo esterilizado para você não ficar mal. 
No Salão Fashion da Leila são oferecidos os seguintes serviços:
Corte de cabelo, Escova Simples, Coloração, Unhas de Acrigel, Maquiagem
Existem 3 cadeiras com profissionais no total dentro do salão.
Então é preciso saber se o salão está cheio ou se há vaga disponível. 
Caso não tenha mais vaga, pedir pra cliente voltar outro dia. 
*/

// RESOLUÇÃO EXERCICIO GABB 

const prompt=require("prompt-sync") ();
const CAPACIDADE_MAXIMA = 3
var lugares = 0

//Cabeçalho

console.log ('Cabeleireira Leila: cabelos, unhas, hidratação e unha. \n' 
    +'Cabeleireira Leila: venha fazer suas unhas, seus cabelos, \n' 
	+'e até mesmo hidratar suas madeixas de cabelo conosco. Tudo esterilizado para você não ficar mal');

//Entrada

console.log('Seja Bem vinda!Qual o seu nome: \n')
  var nome = prompt('->');

// verificar se tem cadeira disponível, se sim, mostrar a lista de procedimento
// se não, pede pra ela voltar outro dia.
//Processamento

while (lugares < CAPACIDADE_MAXIMA) {

  
  console.log('1 - Corte de Cabelo' );
  console.log('2 - Escova Simples');
  console.log('3 - Coloracao');
  console.log('4 - Unhas de Acrigel');
  console.log('5 - Maquiagem');

  var resposta = prompt('Escolha o serviço desejado: '); 
  
  
  if (resposta == 1)
     console.log('Pode entrar, escolha uma cadeira que o Profissional já irá lhe atender.');
  if (resposta == 2)
     console.log('Pode entrar, escolha uma cadeira que o Profissional já irá lhe atender.');
  if (resposta == 3)
     console.log('Pode entrar, escolha uma cadeira que o Profissional já irá lhe atender.');
  if (resposta == 4)
     console.log('Pode entrar, escolha uma cadeira que o Profissional já irá lhe atender.');
  if (resposta == 5)
     console.log('Pode entrar, escolha uma cadeira que o Profissional já irá lhe atender.');
  
lugares++;
}
console.log('Salao lotado! ');