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
