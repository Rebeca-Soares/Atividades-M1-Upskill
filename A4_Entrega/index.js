const taxaCambio = 0.92;
const moedaOrigem = "Euro";
const moedaDestino = "Dolar";

let valorEmEuro = "500";
console.log("Tipo do valor em Euro: ", typeof valorEmEuro);

let valorEmDolar = Number(valorEmEuro) * taxaCambio; 
console.log("Tipo do valor em Dolar: ", typeof valorEmDolar);

console.log("500 euros equivalem a " + valorEmDolar + " dolares.");


