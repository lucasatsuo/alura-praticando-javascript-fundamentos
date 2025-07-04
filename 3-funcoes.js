// Function

// elevar x a y
function calculaPotencia(num, pow) {
    let resultado = 1; // é bom porque quando pow=0 retorna 1
    for (let i = 0; i < pow; i++) {
        resultado *= num;
    }
    return resultado;
}

console.log(calculaPotencia(4, 3));
console.log(calculaPotencia(2, 10));


// Expressão de função
// o que a gente fez antes foi uma declaração de função

// uma expressão ela é anonima e pode ser atribuida a uma variavel, 
// isso é commum em javascript
// ao contrario das funções declaradas, as expressões de funções não vao ser içadas (hoisted)
// para o começo do código, ela só vai ser "declarada" quando o interpretador ler a
// linha que o programa está

// criar função que calcula o fatorial de um numero por recursao
const fatorial = function f(num) {
    if (num === 0 || num === 1) return 1;
    return num * f(num - 1);
}
console.log(fatorial(5));




// tem a ultima forma de funções: as arrow functions
// elas tem uma diferenciação do: this   elas pegam o this de fora...
// cont variavel= (parametro) => {
//     bloco de codigo
//     retorno
// }

const soma = (num1, num2) => {
    console.log(num1 + num2);
};

// vc pode declarar bem sucintamente, sem usar () nos parametro nem as {} nem keyword return
const boasVindas = nome => `Olá, ${nome}`;
console.log(boasVindas('Lucas'));

const fatorialArrow = (num) => {
    if (num === 0 || num === 1) return 1;
    return num * fatorial(num - 1);
}


// exercicio criar uma função apra juros compostos
// formula valor * (juro elevado a tempo)
const calculaJuros = (valor, juros, tempo) => {
    let taxaJuros = juros / 100 + 1; // juros no formato 1,05
    return valor * Math.pow(taxaJuros, tempo);
}
console.log(calculaJuros(1000, 5, 2));


// funções CALLBACK
// sao passadas como argumentos para outras funções

// setTimeout(function(){
//     console.log('olá mundo'); // aqui tudo isso é o primeiro argumento
//                               // uma outra função que vai executar
// }, 0); // aqui é o segundo argumento, o tempo de timeout


// setTimeout(exibeFrase, 0); // leva o nome de Função de Ordem Superior

function exibeFrase() {
    console.log("Hello World!!!");
}

// criar função que faça operações matematicas
// soma e multiplicação

function somaCall(a, b) { return a + b; }
function multiplica(a, b) { return a * b; }

function calcula(fnOperacao, valorA, valorB) {
    return fnOperacao(valorA, valorB);
}

console.log(calcula(somaCall, 5, 5));
console.log(calcula(multiplica, 5, 5));

const userId = '12345';
// const avisaUsuario = userId => console.log(`sessão de ${userId} está inativa.`);

// setTimeout(avisaUsuario, 0);
// setTimeout(avisaUsuario, 0, userId);

// setTimeout((userId) => console.log(`sessão de ${userId} está inativa.`) ,0, userId);

// aula 14 - gerando mensagens personalizadas

function saudacao(nome = '') {
    if (nome) {
        console.log(`Olá, ${nome}! Bem vindo!`);
    } else {
        console.log(`Olá! Bem vindo!`);
    }
}
saudacao('Lucas');
saudacao();

// aula 15 - calculando desconto
function calcularDesconto(valorProduto, desconto = 10) {
    desconto = valorProduto * desconto / 100;
    console.log(valorProduto - desconto);
}
calcularDesconto(100, 20);

const calcularDescontoExpr = (valorProduto, desconto = 10) => {
    desconto = valorProduto * desconto / 100;
    console.log(valorProduto - desconto);
}
calcularDescontoExpr(100);

// 16 calculando media de duas notas
const calcularMedia = (notaA, notaB) => (notaA + notaB) / 2;

console.log(calcularMedia(7, 8));


// aula 17 - é par ou impar
function calcularParidade(numero) {
    if (numero % 2 === 0)
        console.log("Par");
    else
        console.log("Ímpar");
}
calcularParidade(62);
calcularParidade(61);


// aula 18 - calculo de frete por distancia
function calcularFrete(distancia) {
    if (distancia <= 5) {
        return 5;
    } else if (distancia <= 20) {
        return distancia * 0.5;
    } else {
        return 20;
    }
}
console.log(calcularFrete(3));
console.log(calcularFrete(12));


// aula 19 - mensagem pos-processamento
function processarPedido(nome, situacao, callback) {
    console.log(`Processando pedido de ${nome}.`);
    callback(nome, situacao);
}

function mensagemPersonalizada(nome, situacao) {
    if (situacao === 'vip') console.log(`Obrigado pela fidelidade, ${nome}, aproveite o frete grátis`);
    else if (situacao === 'novo') console.log(`Obrigado ${nome}, aproveite cupom de boas-vindas`);
    else console.log(`${nome}, você paga por todos nossos outros gastos de retenção  :)`);
}
processarPedido("Lucas", "vip", mensagemPersonalizada);


// aula 20 - mensagem com atraso
function mostrarResposta(name) {
    console.log(`Olá, ${name}! Aqui está a resposta para sua dúvida.`);
}

function responderUsuario(usuario, callback) {
    console.log("Processando sua pergunta...");
    setTimeout(callback, 0, usuario);
}
responderUsuario("Camila", mostrarResposta);


// aula 21 - avaliando a pontuação de um usuário
function avaliarDesempenho(pontuacao, callback) {
    console.log(`Pontuação: ${pontuacao}`);
    let situacao = "";

    if (pontuacao >= 70) { // dessa forma a logica de quem e aprovado fica na fn avaliar
        situacao = "aprovado";
    }
    else if (pontuacao >= 50) {
        situacao = "reforco";
    }
    else {
        situacao = "reprovado";
    }

    callback(situacao);
}

avaliarDesempenho(82, gerarMensagem);

function gerarMensagem(situacao) {
    if (situacao === "aprovado") {
        console.log("Parabéns! Você foi aprovado!");
    } else if (situacao === "reforco") {
        console.log("Você ficou de reforço");
    } else {
        console.log("Você foi reprovado! Tente novamente.");
    }
}


// aula 22 - classificador consumo elétrico

function calcularConsumo(potencia, horasPorDia){
    let consumo =(potencia * horasPorDia * 30)/1000;
    return consumo;
}

function classificarConsumo(consumo){
    if(consumo < 50){
        return "Baixo consumo";
    }else if(consumo < 199){
        return "Consumo moderado";
    }else{
        return "Alto consumo";
    }
}

function exibirResumo(aparelho, consumo, classificacao){
    console.log(`${aparelho} tem consumo de ${consumo.toFixed(1)} KWh/mês e é classificada como ${classificacao}`);
}

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(151, 4);
const classificacao = classificarConsumo(consumo);
exibirResumo(nomeAparelho, consumo, classificacao);


// aula 23 - sorteio com avaliacao dos participantes

function sorteiaParticipante(participantes){
    indexSorteado = Math.floor(Math.random() * (participantes.length));
    return participantes[indexSorteado];
}

function exibeSorteio(sorteado){
    console.log("Sorteando...");
    
    setTimeout((sorteado) => {
        console.log(`Participante sorteado: ${sorteado.nome}`);
        console.log(`Pontuação: ${sorteado.pontuacao}`);
        console.log(avaliaPontuacao(sorteado.pontuacao));
    }, 0, sorteado);
}

function avaliaPontuacao(pontuacao){
    if(pontuacao > 80){
        return "Parabéns, você foi premiado!";
    }else if(pontuacao > 50){
        return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
    }else{
        return "Infelizmente, não foi dessa vez.";
    }
}

function realizaSorteio(participantes){
    const sorteado = sorteiaParticipante(participantes);
    exibeSorteio(sorteado);
}

const participantes = [
    { nome: "Laura", pontuacao: 92},
    { nome: "Pedro", pontuacao: 67},
    { nome: "Clara", pontuacao: 44}
]

realizaSorteio(participantes);


// aula 24 - Contagem regressiva recursiva

function contagemRegressiva(numero){
    if(numero === 0){
        console.log("Lancamento!");
    } else {
        console.log(numero);
        contagemRegressiva(numero-1);
    }
}

contagemRegressiva(5);

// Vimos as diferenças de funções por Declaração e Expressão
// quando define uma função por expressão, ela só passa a valer no espaço no momento 
// que é foi interpretada. Ao invés da declaração que as linhas são içadas para o 
// início do código.