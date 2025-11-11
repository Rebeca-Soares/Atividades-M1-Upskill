const rendimentoMensal = 3000;
const idade = 25;
const temDividas = false;
const anosTrabalho = 2;

if (rendimentoMensal >= 3000 && idade >= 25) {
    console.log('Aprovado Nível 1: Crédito de Alto Risco (Valor Máximo: 50.000 EUR)');
} else if (idade >= 20 && rendimentoMensal >= 1500 && !temDividas) {
    console.log('Aprovado Nível 2: Crédito Padrão (Valor Máximo: 10.000 EUR).');
} else {
    console.log('Recusado: Não cumpre os critérios mínimos de elegibilidade.');
};
