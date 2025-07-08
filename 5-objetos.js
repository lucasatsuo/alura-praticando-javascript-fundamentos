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

function exibeTrofeus(listaTrofeus){
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
    const anoNasc = parseInt(this.nascimento.slice(0,4));
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

for(const cliente of clientes){
    const situacao = cliente.ativo ? "Ativo" : "Inativo";
    console.log(`Cliente: ${cliente.nome}, situação: ${situacao}`);
}

