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
const numeroFinal = 5;
for(let i=1; i<=numeroFinal; i++){
    console.log(i);
}


// aula 11. 10 até 0 e "lançar!"
for(let i=10; i>=0; i--){
    console.log(i);
}
console.log("Lançar!");