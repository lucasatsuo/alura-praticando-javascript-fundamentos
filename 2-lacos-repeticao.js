// Laços de Repetição


// 1. Gerar numero x aleatorios de 1 a 50
// se x == 15 para ou tentativas == 30

let i = 1;
let encontrou = false;
for(i=0; i<30; ++i){
    const numero = Math.floor(Math.random() * 50 + 1);
    if(numero === 15){
        encontrou = true;
        break;
    }
}
if(encontrou){
    console.log(`Encontrou o 15 em ${i} tentativas!`);
}else{
    console.log(`Não encontrou o 15, nas ${i} tentativas..`);
}


// 2. Gerar números aleatórios de 1 a 50
// ter um contador que só incrementa quando numero NÃO é divisivel por 5
// no fim, exibir o contador
let contador = 0;
for(i=1; i<30; i++){
    const numero = Math.floor(Math.random() * 50 + 1);
    if(numero % 5 === 0){
        continue;
    }
    contador ++;
}
console.log(`Contador = ${contador}`);


// 3. Fazer um laço que tente "adivinhar" um numero de 1 a 50
// e conte as tentativas até o resultado
let tentativas = 0;
let objetivo = 32;
let numero;
do {
    numero = Math.floor(Math.random() * 50 + 1);
    tentativas++;
} while (numero !== objetivo);
console.log(`Encontrei o número em ${tentativas} tentativas`);


// 4. gere um numero aleatorio de 1 a 50 
// até gerar um numero par
tentativas = 0;
do{
    numero = Math.floor(Math.random() * 50 + 1);
    tentativas++;
} while(numero % 2 !== 0);
console.log(`Gerei ${tentativas} números até vir um PAR`);


// 5. criar um laço para ver se é palindromo
const texto = "araara";
let primeira = 0;
let ultima = texto.length - 1;
let palindromo = false;
do{
    if(texto[primeira] === texto[ultima]){
        palindromo = true;
    }else{
        palindromo = false;
        break;
    }
    primeira++;
    ultima--;
}while((ultima - primeira) > 0);

if(palindromo){
    console.log("É palindromo!!") 
}else{
    console.log("não é palindromo!!");
}

// outra forma, da correção
let textoInvertido = '';
for(let i = texto.length-1; i>=0; i--){
    textoInvertido += texto[i];
}
texto === textoInvertido ? console.log("é palindromo") : console.log("não é palindromo");



// aula 10. exercicio
// contagem de numeros
let numeroFinal = 5;
for(let i=1; i<=numeroFinal; i++){
    console.log(i);
}


// aula 11. 10 até 0 e "lançar!"
for(let i=10; i>=0; i--){
    console.log(i);
}
console.log("Lançar!");


// aula 12
numeroFinal = 10;
for(let i=1; i<=10; i++){
    if(i%2 === 0){
        console.log(i);
    }
}


// aula 13 mostrar cada caractere da senha
let senha = "seguranç@2025";
for(let i=0; i<senha.length; i++){
    console.log(senha[i]);
}


// aula 14 - mostra nomes ate encontrar 'fim'
const entradas = ["Ana", "Bruno", "Carla", "Fim", "Daniel"];
i = 0;
while(entradas[i] !== "Fim"){
    console.log(entradas[i]);
    i++;
}

// aula 15 - Encerrar ao encontrar o num 10
let numeroProibido = 10;
for(let i=0; i<20; i++){
    if(i === 10){
        console.log("Número proibido encontrado!");
        break;
    }
    console.log(i);
}

// aula 16 - economizando +1 real a cada dia
let acum = 0;
for(let i=1; i<=10; i++){
    acum += i;
    console.log(`Dia ${i}: R$${acum}`);
}

// aula 17 - aquecendo. Pode fazer com do-while
const tempoMinimo = 5;
const temperaturaIdealEm = 3;
for(i=0; i<=tempoMinimo; ++i){
    if(i === temperaturaIdealEm){
        console.log(`Aquecendo... segundo ${i} - Temperatura ideal atingida`);
    }else{
        console.log(`Aquecendo... segundo ${i}`);
    }
}
console.log(`Tempo total de aquecimento: ${i-1} segundos`);


// aula 18 - processando caixas
const caixas = [12, -1, 8, 0, -5, 3, 7, 14];
for(let i=0, validas=0; i<caixas.length && validas<5; i++){
    if(caixas[i] < 0){
        console.log("Caixa danificada, ignorada.");
    }else{
        console.log(`Caixa processada: ${caixas[i]}`);
        validas++;
    }
}
console.log("Limite de caixas processadas atingido")

// aula 19 - senhas
tentativas = ["1234", "admin", 'ovo', 'abc', 'coisa', "secreto"];
const senhaCorreta = "secreto";
const tentativasBloqueio = 3;
for(i=0; i<tentativas.length; i++){
    if(tentativas[i] !== senhaCorreta){
        console.log(`Tentativa ${i+1} inválida.`);
    }else{
        console.log('Acesso Permitido!');
        break;
    }
    if(i === tentativasBloqueio-1){
        console.log("Acesso bloqueado. numero máximo de tentativas atingido");
        break;
    }
}