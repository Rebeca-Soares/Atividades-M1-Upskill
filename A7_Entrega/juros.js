// Rebeca Cerqueira - 224

// Atividade 1

const investimentoInicial = 1000;
const taxaJuros = 0.05;
const numeroAnos = 5;

let saldoAtual = investimentoInicial;

for (let i = 1; i <= numeroAnos; i++) {
    const juroGanho = saldoAtual * taxaJuros;
    saldoAtual += juroGanho;

    console.log(`Fim do Ano ${i}: Saldo = ${saldoAtual.toFixed(2)} EUR`);
}

// Atividade 2 - Contagem Regressiva Personalizada

for(let b = 100; b >= 0; b--) {
    if(b % 10 === 0){
        console.log(b)
    }
};

