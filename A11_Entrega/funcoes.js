// Exercicio 1

function verificarParOuImpar(n){
    if(n % 2 == 0) {
        console.log(`${n} é par`)
    } else {
        console.log(`${n} é impar`)
    }
}

verificarParOuImpar(11);

// Exercicio 2

function calcularIMC(peso, altura) {
    imc = peso / (altura * altura)
    console.log(`O IMC de ${peso} kg e ${altura} m é ${imc}.(tofixed)`)
};

calcularIMC(50, 1.70)

// Exercicio 4

function somatorio(n) {
    let soma = 0;

    for (let i = 1; i <= n; i++) {
        soma += i;
    }

    return soma;
}
console.log(somatorio(10));
console.log(somatorio(5));
