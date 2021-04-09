//Leilaflix
//Este é um canal de stream de filmes de Horror e Drama.
//Apresente uma lista final de filmes e atrelar a relevância dela de acordo com as escolhas do usuário durante a interação com a lista de filmes exibidos no canal (exemplo da Netflix, Spotify, Youtube)
//Dica: categorize a relevância dos filmes, afunilando a preferência do usuário a partir da seleção dos filmes que contém tópicos do interesse do usuário.
//(Ex: "Titanic (95%): este filme venceu diversos prêmios Oscar".)

const prompt = require("prompt-sync")();

console.log("======= LEILAFLIX =======");
var genero = Number(prompt("Escolha o genêro do filme: [1] Terror [2] Drama: "));

if (genero == 1){
let filmeTerror = Number(prompt("Entre os filmes de terror [1] Invocação do Mal e [2] It, qual você prefere?: "));
switch(filmeTerror){
    case 1: mensagem = "Recomendação: (67% gostaram desse filme) Invocação do Mal: Este filme pode atender sua sede de terror!"; break
    case 2: mensagem = "Recomendação: (82% gostaram desse filme) It: Este filme pode atender sua sede de terror!"; break
}
console.log(mensagem);}

if (genero == 2){
let filmeDrama = Number(prompt("Entre os filmes de drama [1] O Homem Duplicado e [2] Fragmentado, qual você prefere?: "));
switch(filmeDrama){
    case 1: mensagem = "Recomendação: (76% gostaram desse filme) O Homem Duplicado: Este filme pode atender sua sede de drama!"; break
    case 2: mensagem = "Recomendação: (95% gostaram desse filme) Fragmentado: Este filme pode atender sua sede de drama!"; break
}
console.log(mensagem);}
