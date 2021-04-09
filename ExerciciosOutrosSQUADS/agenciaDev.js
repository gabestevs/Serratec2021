// Squad: Leks de Konoha;

//Na nossa incrível agência de viagens faremos um pacotão a sua escolha:
//1- Precisa ter 3 opções de lugares no mínimo (fica a criatividade do squad);
//2 - Fazer um pacote de viagem para cada lugar incluindo adicionais (por exemplo: Viagem para Santa Catarina; passeio no:
//    Beto Carrero; 2 dias de parque,
//e 1 em pontos turísticos; hotel que vai ficar; quantidade de pessoas; formas de pagamento; valor total da viagem);
//(obs: é só um exemplo faça a parir da sua imaginação!!)

const ler = require("prompt-sync")();

// ENTRADA
console.log("=== BEM VINDO A AGENCIA DEV ===");
console.log("[1] -> Fernando de noronha ");
console.log("[2] -> Paraty ");
console.log("[3] -> Gramado ");

var destino = ler("Selecione o seu Destino dentre as opções! ");
destino = Number(destino);

if (destino == 1) {
    console.log("Pacotes Existentes para o destino escolhido são: \n");

    console.log("==== PACOTE 1 - SILVER ==== \n\n");
    console.log("Hostel Boldro Surf House 2 estrelas.");
    console.log("Direito a 4 dias e 3 noites.");
    console.log("Passeio de barco incluso.");
    console.log("Visitar o mirante dos golfinhos.");
    console.log("Valor deste pacote por pessoa é de R$ 2.578. \n");

    console.log("==== PACOTE 2 - GOLD ==== \n\n");
    console.log("Pousada Estrela do Mar 3 estrelas.");
    console.log("Direito a 5 dias e 4 noites.");
    console.log("Conhecer o projeto TAMAR.");
    console.log("Aventurar-se no Aquasub.");
    console.log("Valor deste pacote por pessoa é de R$ 5.447. \n");

    console.log("==== PACOTE 3 - BLACK ==== \n\n");
    console.log("Pousada Maria Bonita Noronha 4 estrelas.")
    console.log("Direito a 8 dias e 7 noites.")
    console.log("Visitar o parque Nacional Marinho de Fernando de Noronha.");
    console.log("Direito ao Bar do Meio, localizado entre a Praia da Conceição e a Praia do Meio.");
    console.log("Passar o dia na Baía dos Porcos (mergulho).");
    console.log("Valor deste pacote por pessoa é de R$ 8.232. \n");

    var pacote = ler("Selecione o NUMERO do pacote de viagem desejado: ");
    pacote = Number(pacote);

} else if (destino == 2) {
    console.log("Pacotes Existentes para o destino escolhido são: \n");

    console.log("==== PACOTE 1 - SILVER ==== \n\n");
    console.log("Pousada Jardim das Oliveiras 3 estrelas.");
    console.log("Direito a 3 dias e 2 noites.");
    console.log("Conhecer o centro histórico de Paraty.");
    console.log("Um dia na praia do pontal.");
    console.log("Valor deste pacote por pessoa é de R$ 764.90 \n");

    console.log("==== PACOTE 2 - GOLD ==== \n\n");
    console.log("Pousada Pontal Gardens 3 estrelas.");
    console.log("Direito a 5 dias e 4 noites.");
    console.log("Mergulho de cilindro.");
    console.log("Um dia na praia do jabaquara.");
    console.log("Valor deste pacote por pessoa é de R$ 1.099 \n");

    console.log("==== PACOTE 3 - BLACK ==== \n\n");
    console.log("Pousada Aquarium 3 estrelas")
    console.log("Direito a 8 dias e 7 noites")
    console.log("Passeio de escuna.");
    console.log("Passeio de barco em torno as ilhas.");
    console.log("Conhecer a vila da trindade.");
    console.log("Valor deste pacote por pessoa é de R$ 1.749 \n");

    pacote = ler("Selecione o NUMERO do pacote de viagem desejado: ");
    pacote = Number(pacote);

} else if (destino == 3) {
    console.log("Pacotes Existentes para o destino escolhido são: \n");

    console.log("==== PACOTE 1 - SILVER ==== \n\n");
    console.log("Hotel Laghetto Allegro Fratello 3.5 estrelas");
    console.log("Direito a 3 dias e 2 noites.");
    console.log("Conhecer Museu medieval.");
    console.log("Uma noite na rua coberta.");
    console.log("Valor deste pacote por pessoa é de R$ 951.35 \n");

    console.log("==== PACOTE 2 - GOLD ==== \n\n");
    console.log("Hotel Refugio da Montanha 4 estrelas.");
    console.log("Direito a 5 dias e 4 noites.");
    console.log("Visitar a Fonte do Amor Eterno.");
    console.log("visitar o Mini Mundo.");
    console.log("Valor deste pacote por pessoa é de R$ 1.103. \n");

    console.log("==== PACOTE 3 - BLACK ==== \n\n");
    console.log("Deluxe Apartamento - Gramado. 4 estrelas")
    console.log("Direito a 8 dias e 7 noites.")
    console.log("Visitar o Gramado Zoo.");
    console.log("Museu de Cera Dreamland.");
    console.log("Cascata do caracol.");
    console.log("Valor deste pacote por pessoa é de R$ 6.754. \n");

    pacote = ler("Selecione o NUMERO do pacote de viagem desejado: ");
    pacote = Number(pacote);

} else {
    console.log("Opção invalida.");
    return;
}

if (pacote > 3) {
    console.log('Pacote inválido');
    return;
}
// SAÍDA
console.log("Você selecionou o pacote " + pacote + " para o seu destino com sucesso! Boa viagem!");