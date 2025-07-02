
const num1 = 2;
const num2 = 4;
const operacao = 'multiplicacao';

if(operacao === 'soma'){
    console.log(num1 + num2);
} else if(operacao === 'multiplicacao'){
    console.log(num1 * num2);
} else {
    console.log('Operação não identificada');
}

// fazendo um calculo para o bonus de salarios de acordo com a faixa salarial
const salario = 3999;

if (salario >= 11000){
    console.log("3% de bonus");
} else if(salario >= 7000){
    console.log("5% de bonus");
} else if(salario >= 4000){
    console.log("6% de bonus");
} else{
    console.log("9% de bonus");
}


// verificar se um ano é bissexto
const ano = 2000;

if ((ano % 4 === 0) && (ano%100 !== 0) || ano % 400 === 0){
    console.log(`${ano} e bissexto`);
} else {
    console.log(`${ano} nao e bissexto`);
}


// operador ternário / operador condicional
const nome = false;
const saudacao = nome ? `olá, ${nome}` : `olá, pessoa`;
console.log(saudacao);

// switch case
// dentro de cada case tem que ter um valor, ele não valida expressoes
// case 7 && true = nunca vai funcionar
const nota = 8;
switch(nota){
    case 10:
    case 9:
    case 8:
        console.log("parabens");
        break;
    case 7:
    case 6:
    case 5:
        console.log("Cuida para que não caia!");
        break;
    default:
        console.log("Xii tá ruim");

}

// 12 acesso liberado?
const idade = 20;
idade >= 18 ? console.log("Acesso permitido.") : console.log("Acesso negado");


// 13 classificando a temperatura
const temperatura = 22;
if(temperatura < 15){
    console.log("Frio");
}else if(temperatura < 25){
    console.log("Agradável");
}else{
    console.log("Calor");
}


// 14 Classificação de idades para uma atividade
const idadeAluno = 15;
if(idadeAluno < 12){
    console.log("Infantil");
}else if(idadeAluno < 18){
    console.log("Juvenil");
}else{
    console.log("Adulto");
}


// 15 Horário de funcionamento da loja
const diaSemana = 6;
switch (diaSemana) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("A loja está aberta no horário normal: 9h às 18h.");
        break;
    case 6:
    case 0:
        console.log("A loja está aberta em horário especial: 10h às 14h.");
        break;
    default:
        console.log("Dia de semana inválido");
        break;
}


// 16 Validação de login
const usuario = "admin";
if(usuario == "admin"){
    console.log("Login bem-sucedido!");
}else{
    console.log("Usuário inválido.");
}


// 17 Verificando compatibilidade de tipos de frutas
const fruta = "abacaxi";
if(fruta !== "laranja" && fruta !== "abacaxi"){
    console.log("Fruta incompatível com a receita.");
}else{
    console.log("Fruta compatível com a receita.");
}


// 18 Controle de efetuar compra
const carrinhoVazio = false;
carrinhoVazio ? console.log("Compra efetuada!") : console.log("Carrinho vazio, compra não efetuada");


// 19 Verificando o status de pagamento
const statusPagamento = "aprovado";

switch(statusPagamento){
    case "pendente":
        console.log("Pagamento pendente.")
        break;
    case "aprovado":
        console.log("Pagamento aprovado.")
        break;
    case "recusado":
        console.log("Pagamento recusado.")
        break;
    default:
        console.log("Status inválido.")
        break;
}


// Verificar acesso a nivel do jogo
const pontos = 60;
const vidas = 1;

if(pontos > 50 && vidas >= 1){
    console.log("Próximo nível liberado!")
}else{
    console.log("Não pode avançar para o próximo nível.")
}


// Nivel de bateria do dispositivo
const bateria = 65;
if(bateria < 20){
    console.log("Crítica");
}else if(bateria < 80){
    console.log("Moderada");
}else{
    console.log("Cheia");
}