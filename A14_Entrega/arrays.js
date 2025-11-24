// Exercicio 1
const numeros = [2, 5, 3, 8];

function somarArray(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i]
    }
    return soma;
}

console.log(somarArray(numeros));

// Exercicio 2
const nums = [1, 4, 6, 9, 12];

function contarPares(arr) {
    let somaPares = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0)
            somaPares++
    }
    return somaPares
} 

console.log(contarPares(nums));

// Exercicio 3

const lista = [10, 5, 22, 1, 7];

function maiorNumero(arr) {
    let maior = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > maior){
            maior = arr[i]
        }
    }
    return maior
}

console.log(maiorNumero(lista));

// Exercicio 4

const dados = [5, 12, 3, 18, 7, 30];

function filtrarMaioresQue10(arr) {
    let resultado = []; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            resultado[resultado.length] = arr[i]; 
        }
    }

    return resultado;
}

console.log(filtrarMaioresQue10(dados)); 