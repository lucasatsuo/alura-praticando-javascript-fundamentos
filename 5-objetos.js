// Objetos
// a notação de objetos é const nomeObjeto = {atributo: valor [, atributo: valor]}
// para acessar valores pode fazer tanto pela Notação de Ponto: pessoa.nome
// ou por pessoa['nome'], usar se tiver espaços:  pessoa['nome completo']

// crie um objeto 'pessoa' como jogadora

const pessoa = {
    nome: 'Roberta R',
    nascimento: '2020-01-01',
    cpf: '23456789023',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

// imprima no terminal o nome da pessoa e um dos trofeus
console.log(pessoa.nome);
console.log(pessoa.trofeus[0]);

// exclua uma propriedade do objeto
delete pessoa.cpf;
console.log(pessoa);

// criar uma funcao para iterar os trofeus

function exibeTrofeus(listaTrofeus) {
    for (const trofeu of listaTrofeus) {
        console.log(`tem o troféu ${trofeu}`);
    }
}

exibeTrofeus(pessoa.trofeus);


// Métodos em objetos

// adicione ao obj um método para calcular a idade da pessoa e retornar o valor no terminal como string.

const user = {
    nome: 'Roberta R',
    nascimento: '1998-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

user.calculaIdade = function calculaIdade() { // passa o nome para não ser uma função anonimizada
    const anoNasc = parseInt(this.nascimento.slice(0, 4));
    const idade = new Date().getFullYear() - anoNasc;
    console.log(`A idade é: ${idade}`);
}

user.calculaIdade();

// Métodos de objetos
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// tem um método específico de iteração em objetos
// essa iteração usa a chave do objeto
for (const info in user) {
    if (Object.prototype.hasOwnProperty.call(user, info)) {
        const text = `chave ${info}, valor do tipo ${typeof user[info]}`;
        console.log(text);
    }
}


// acesse um array de objetos e imprima no terminal os nomes e status de ativação de cada pessoa.
const clientes = [
    {
        nome: 'Marina M',
        ativo: true,
    },
    {
        nome: 'Rafael R',
        ativo: false,
    },
    {
        nome: 'Fabio F',
        ativo: false,
    },
];

for (const cliente of clientes) {
    const situacao = cliente.ativo ? "Ativo" : "Inativo";
    console.log(`Cliente: ${cliente.nome}, situação: ${situacao}`);
}


// exercicio 12 - Criando um objeto com dados de um produto
const produto = {
    nome: 'fone de ouvido',
    preco: 149.9,
    disponivel: true
};
console.log(produto);


// ex 13 - acessar dados com ponto e colchetes
const configuracoes = {
    tema: 'escuro',
    notificacoes: 'nenhuma',
    idioma: 'pt-BR'
};
console.log('Tema:', configuracoes.tema);
console.log('Idioma:', configuracoes['idioma']);


// ex 14 - arrays dentro de objetos
const receita = {
    nome: 'Cuscuz Paulista',
    ingredientes: ['farinha de milho', 'ovos', 'ervilha', 'sardinha', 'orégano'],
    tempoPreparo: 35
};
console.log(`Ingrediente complementar:`, receita.ingredientes[2]);


// ex 15 - removendo uma propriedade
const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    modeloAntigo: 'Corolla XEi'
};
delete carro.modeloAntigo;

console.log(carro);


// ex 16 - iterando um array de objeto
const dispositivos = [
    { nome: 'Impressora', status: 'ativo' },
    { nome: 'Scanner', status: 'inativo' },
    { nome: 'Projetor', status: 'ativo' }
];

for (let disp of dispositivos) {
    console.log(`Nome: ${disp.nome} | Status: ${disp.status}`);
}

// ex 17 - criando metodos dentro de um objeto
const maquina = {
    nome: 'Esteira Transportadora',
    funcionando: false,
    // adicione aqui o método exibirStatus
    exibirStatus: function () {
        const textoStatus = this.funcionando ? 'está em funcionamento' : 'está parada';
        console.log(`A máquina ${this.nome} ${textoStatus}`);
    }
};

maquina.exibirStatus();


// ex 18 - montar um objeto a partir de pares chave-valor
const dados = [ // montar o objeto a partir daqui
    ['nome', 'João'],
    ['idade', 30],
    ['cidade', 'Curitiba']
]

const cadastro = {}
for (let c of dados) {
    cadastro[c[0]] = c[1]
};
console.log(cadastro);
// outra forma interessante do for:
for (let [chave, valor] of dados) {
    // cadastro[chave] = valor
    console.log(chave, valor);
}


// ex 19 - criando um sistema de inspeção
const relatorio = {
    temperatura: 75,
    vibracao: 40,
    pressao: 55,
    nivelRuido: 30
};

function geraRelatorio(relatorio) {
    const indices = Object.keys(relatorio);
    const valores = Object.values(relatorio);
    const entradas = Object.entries(relatorio);

    console.log('Categorias avaliadas:', indices);
    console.log('Valores registrados:', valores);

    console.log('Detalhamento');
    for (let [dado, value] of entradas) {
        situacao = value > 50 ? '(alerta)' : '(OK)';
        console.log(dado, ':', value, situacao);
    }
}

geraRelatorio(relatorio);


// ex 20 - gerando um relatório de manutenção

const manutencao = { // armazena qtd de dias parados
    jan: 2,
    fev: 0,
    mar: 5,
    abr: 4,
    mai: 0,
    jun: 7
};

function relatorioManutencao(manutencao) {
    const entradas = Object.entries(manutencao);

    // const diasParados = entradas.reduce((acc, [mes, dias]) => {
    //     acc += parseInt(dias);
    //     return acc;
    // }, 0);

    let diasParados = 0;
    let mesesManutencao = 0;

    for (const [_, dias] of entradas) {
        diasParados += dias;
        if (dias > 0) {
            mesesManutencao++;
        }
    }

    const textoStatus = diasParados <= 20 ? "Dentro do limite anual" : "Atenção! acima do limite anual";

    console.log('Dias parados:', diasParados);
    console.log('Meses com manutenção registradas:', mesesManutencao);
    console.log('Status:', textoStatus);
}

relatorioManutencao(manutencao);


// ex 21 - Analisando desempenho de estudantes
const curso = {
    titulo: "JavaScript Intermediário",
    estudantes: [
        { nome: "Ana", progresso: 85 },
        { nome: "Carlos", progresso: 41 },
        { nome: "Juliana", progresso: 72 },
        { nome: "Pedro", progresso: 60 }
    ],

    gerarRelatorio: function(){
        const situacao = this.estudantes.progresso >= 70 ? "Aprovado" : "Em andamento";
        let totalNota = 0;
        for(let e of this.estudantes){
            console.log(`Estudante: ${e.nome} | Progresso ${e.progresso}% | Situação: ${situacao}`)
            totalNota += e.progresso;
        }

        const totalEstudantes = this.estudantes.length
        console.log('Total de estudantes:', totalEstudantes);
        console.log(`Média geral da turma: ${(totalNota/totalEstudantes).toFixed(2)}%`);
    }
};

curso.gerarRelatorio();


