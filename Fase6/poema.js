/*No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. 
 *Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos.
 */

 let ler = require('prompt-sync')();

 const poema = 'Nenhum homem é uma ilha isolada; cada homem é uma partícula do continente, \n uma parte da terra; se um torrão é arrastado para o mar, a Europa fica diminuída, como se fosse um promontório, \n como se fosse a casa dos teus amigos ou a tua própria; a morte de qualquer homem diminui-me, porque sou parte do gênero humano. \n E por isso não perguntes por quem os sinos dobram; eles dobram por ti.'
 
 while (true) {
     console.log("--- Nenhum homem é uma ilha --- \n")
     console.log(poema);
     console.log('Devo repetir o poema? (S/N)');
     let devoRepetir = ler('~> ');
 
     if (devoRepetir.toUpperCase() != 'S') {
         break;
     }
 }
 console.log('Fim da Exibição do Poema');
 