// Aluna: Rebeca Cerqueira - 224

// Exercicio: Calculadora de Recibo

const precoBase = 250.00;
const percentagemDesconto = 0.10;
const percentagemImposto = 0.20;
const nomeItem = 'Serviço de Consultoria';

let valorDesconto = precoBase * percentagemDesconto;
let precoLiquido = precoBase - valorDesconto;
let valorImposto = precoLiquido * percentagemImposto;
let precoFinal = precoLiquido + valorImposto;

console.log('------Recibo de compra------');
console.log(`Item: ${nomeItem}`);
console.log(`Preço base: ${precoBase.toFixed(2)} EUR`);
console.log(`Desconto aplicado (${percentagemDesconto * 100}%): ${valorDesconto.toFixed(2)} EUR`);
console.log(`Preço liquido: ${precoLiquido.toFixed(2)} EUR`);
console.log(`Imposto (${percentagemImposto * 100}%): ${valorImposto.toFixed(2)} EUR`);
console.log(`Total a pagar: ${precoFinal.toFixed(2)} EUR`);
console.log('----------------------------')