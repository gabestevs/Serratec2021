
/*
 O programa “Compromissos” gerencia a sua agenda do mês. Você pode digitar um compromisso, informando o dia e a descrição do evento
 e consultar se existe algum apontamento para determinado dia.
*/

const ler = require("prompt-sync")();

let agenda = [{
    'nome': 'Final da matéria',
    'dia': 09,
    'desc': 'É o dia do final da matéria do Zepa.'
}];


// Template para exibição do Compromisso

var templateExibicaoEvento = (item) => {
    return '\t Evento ' + (item['nome']) + '\n \t Dia ' + (item['dia']) + '\n \t Descrição ' +  item['desc'] + '\n';
}

// Adicionar um novo compromisso

var adicionarCompromisso = () => {
    console.log('Digite o nome do compromisso');
    let nome = ler('~> ');
    console.log('Digite o dia do compromisso');
    let dia = parseInt(ler('~> '));
    console.log('Digite uma descrição para o compromisso');
    let desc = ler('~> ');

    if (!Number.isInteger(dia)) {
        console.log("Dia deve ser um número!");
        return;
    }

    if (dia < 1 || dia > 31) {
        console.log("Escolha um dia válido. " + dia + " é um valor inválido");
        return;
    }

    if (!nome) {
        console.log("Nome do evento deve ser preenchido");
        return;
    }

    if (!desc) {
        console.log("Descrição do evento deve ser preenchida");
        return;
    }

    agenda.push({
        "nome": nome,
        "dia": parseInt(dia),
        "desc": desc
    });

    console.log('Seu compromisso foi adicionado.');
};


// Listar todos os compromissos salvos em memória

var listarCompromissos = () => {
    console.log('\n\nEventos em sua agenda\n\n');

    agenda.forEach((item) => {
        console.log(templateExibicaoEvento(item));
    });
};

// Listar compromissos por data

var listarCompromissosPorData = () => {
    console.log(corAzul('\nPor favor, selecione um dia para listar os compromissos'));
    let diaEscolhido = parseInt(ler('~> '));

    console.log('Para o dia escolhido ' +  (diaEscolhido) + ' temos os seguintes resultados:\n');

    // Feito uma filtragem pelo campo dia em cada registro
    const agendaFiltrada = agenda.filter((value) => {
        return value['dia'] == diaEscolhido;
    });

    // Verificando se o resultado da filtragem é nulo, exibindo assim uma mensagem de "Sem resultados"
    if (agendaFiltrada.length == 0) {
        console.log('Sem resultados');
        return;
    }

    // Exibindo cada registro do compromisso
    agendaFiltrada.forEach((item) => {
        console.log(templateExibicaoEvento(item));
    });
};


// Mostrando o menu com as opções

var mostrarMenu = () => {
    console.log('\n\n Por favor, escolha uma operação a ser realizada:\n' + '\t '+ (0) + ' - Mostrar menu \n \t '+ (1) + ' - Listar compromissos \n \t '+ (2) + ' - Listar compromissos por data \n \t '+ (3) + ' - Adicionar compromisso \n \t '+ (4) + ' - Sair do programa');

    escolherOperacao();
};

// Responsável por escolher uma opção

var escolherOperacao = () => {
    let operacaoEscolhida = ler('~> ');
    operacao = parseInt(operacaoEscolhida);
}


// Encerrando o programa

var encerrarPrograma = () => {
    console.log('\n\nObrigado por usar o Compromissos');
}

// Início da exibição do programa

console.log('Bem vindo ao Compromissos');

// Responsável por verificar se a aplicação deve continuar a rodar

let mantemFluxo = true;

// Qual foi a operação escolhida

let operacao = 0;

while (mantemFluxo) {
    if (operacao === 0) {
        mostrarMenu();
        continue;
    }

    if (operacao === 1) {
        listarCompromissos();
        operacao = 0;
        continue;
    }

    if (operacao === 2) {
        listarCompromissosPorData();
        operacao = 0;
        continue;
    }

    if (operacao === 3) {
        adicionarCompromisso();
        operacao = 0;
        continue;
    }

    if (operacao === 4) {
        encerrarPrograma();
        mantemFluxo = false;
        continue;
    }

    console.log('Por favor, escolha um número válido');
    operacao = 0;
}