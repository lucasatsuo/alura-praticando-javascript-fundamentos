// curso: Praticando Javascript: arrays
// Esta é a segunda unidade "Trabalhar com dados estruturados" da formação "Praticando Javascript"

const arr = [1,2,3,4];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

arr[5] = 10;
delete arr[5]

console.log(arr);

// arrays com FOR..OF
// há também esta outra forma de usar o FOR para quando queremos somente passar pelos
// itens do array, sem precisar pegar o length, indice etc
const arrayNumeros = [18, 95, 45, 56, 23, 11];
for (let numero of arrayNumeros){
    if(numero + 10 > 100 || numero > 100) continue;
    console.log(numero+10);
}



// 9 - criar um array de numeros entre x e y

function criaArrNum(inicio, fim){
    const arr = [];

    for(let i=0; i<=fim-inicio; i++){
        // arr.push(i + inicio);
        arr[i] = i + inicio;
    }

    return arr;
}
console.log(criaArrNum(4,8));



// metodos de array

const arrNumeros = [12,23,34,45,56];

arrNumeros.push(67);

arrNumeros.pop();

// se eu quiser saber se um elemento existe no array, ou saber a posicao dele
let elem = arrNumeros.indexOf(12);

// passa um index a partir de onde vai começar
// pode passar o index final tambem, final nao incluso
const novoArr = arrNumeros.slice(2); 
// novoArr == [34, 45, 56]


// CALLBACKS
// o Map sempre vai retornar algo, sempre retorna um array, ou vazio
const arrCalculado = arrNumeros.map((num) => {
    return num*10;
})

arrNumeros.forEach((num, i) => {
    console.log(`O numero ${num} esta no index ${i}`);
})

// filtra os valores do array
// vai retornar todos os numeros divisiveis por 5
const arrFiltrado = arrNumeros.filter(num => num % 5 === 0);


// clonar array multidimensional com "deep copy"
// por que não podemos clonar arrays via variável?

let arr1 = [ [1,2], 2, 3];

const arr2 = arr1; // aqui arr2 é um ponteiro
arr1[0] = 1;

console.log(arr1);
console.log(arr2);

const copiaArray = (arr) => {
    const copia = [];
    arr.forEach((elem) => {
        // 1o vou ver se o elemento e um outro array
        if(Array.isArray(elem)){
            // se for array faz recursao
            copia.push(copiaArray(elem));
        } else {
            copia.push(elem);
        }
    })
    return copia;
}

arr1 = [[1,2], 2, 3];
const arr3 = copiaArray(arr1);

arr1[0] = 1;
console.log(arr3);
console.log(arr1);


// filtrar um array e alterar valores especificos
// ex: alterar numeros para strings

let cpfs = ['12345123451', '23456234562', 34567345673, '56789567895', 67890678906];

let result = cpfs.map((elem) => {
    return String(elem);
})
console.log(result);

result = cpfs.map(elem => {
    if(typeof elem === 'string'){
        return elem;
    }else{
        return String(elem);
    }
})
console.log(result);

result = cpfs.map(cpf => typeof cpf === 'string' ? cpf : String(cpf));
console.log(result);


// exercicio 12 - acessando e modificando elementos de array
// exibir o 2o e modificar o ultimo
const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];
console.log(`Segundo elemento da lista de compras ${listaDeCompras[1]}`);
const listaModificada = listaDeCompras.map(item => 
    item === 'tomate' ? 'beterraba' : item
)
// se criar a arrow function com {} TEM QUE TER return
// const listaModificada = listaDeCompras.map(item => {
//     return item === 'tomate' ? 'beterraba' : item
//     }
// )
console.log(listaModificada);


// Exercicio 13 - Percorrendo listas com for
const despesas = [120, 80, 45.5, 200, 60];
let total = 0;
for (let i = 0; i < despesas.length; i++) {
    total += despesas[i];
}
console.log(`Total de despesas: R$ ${total}`);


// Exercicio 14 - for..of
// exibir o nome de cada um individualmente
const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz'];
for(let name of estudantes){
    console.log(`Estudante: ${name}`);
}


// exercicio 15 - forEach() exibir notificações
const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];
mensagens.forEach(elem => {
    console.log(`Notificação: ${elem}`);
});


// exercicio 16 - adicionando e removendo itens na lista
const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];
tarefas.push('Pagar boletos');
console.log(`Lista apos adicionar: ${tarefas}`);
tarefas.pop();
console.log(`Lista apos remover a ultima: ${tarefas}`);


// exercicio 17 - copia de um array
const pedidos = ['camiseta', 'calça', 'tênis'];
const copiaPedido = pedidos.slice();
copiaPedido.push('boné');
console.log(`Array original: ${pedidos}`);
console.log(`Array copiado: ${copiaPedido}`);


// exercicio 18 - buscando item na lista
const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiço';

if(livros.indexOf(livroProcurado) !== -1){
    console.log(`O livro: ${livroProcurado} está disponível`);
}else{
    console.log(`O livro: ${livroProcurado} não foi encontrado`);
}


// exercicio 14 - aplicar 10% desconto com map()
const precos = [100, 80, 50, 120];
const precosDescontados = precos.map(preco => preco*0.9)
console.log(`Preços com desconto: ${precosDescontados}`);


// exercicios 15 - filter apenas maiores de 18 anos
const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];

const nomesLiberados = participantes.filter( p => 
    p['idade'] >= 18
).map(p => p.nome );

console.log(nomesLiberados);


// exercicio 21 Painel de controle de produtos

const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse'.padEnd(8), preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado'.padEnd(8), preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor'.padEnd(8), preco: 900, quantidadeVendida: 95 }
];

// exibe a tabela completa
for(let p of produtos){
    console.log(`Produto: ${p.nome} | Preço: ${p.preco} | Quantidade vendida: ${p.quantidadeVendida}`);
}

// filtra mais vendidos >100
let produtosMaisVendidos = produtos.filter(p => p.quantidadeVendida > 100)

console.log("Produtos com alto volume de vendas (> 100 unidades):");
for(let p of produtosMaisVendidos){
    console.log(p.nome);
}

// calcula total de vendas
let totalVendas = produtos.map(p => {
    let valorVendas = p.quantidadeVendida * p.preco;
    return {nome: p.nome, total: valorVendas}
})
console.log("Total de vendas por produto:");
totalVendas.forEach(p => {
    console.log(`${p.nome}: R$ ${p.total}`);
});