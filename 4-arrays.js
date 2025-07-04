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
