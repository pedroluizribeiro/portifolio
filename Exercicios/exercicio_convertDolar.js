/*       --EXERCÍCIO--

Escreva um programa que faz a conversão de um valor em R$ para um valor em U$ e mostre o resultado.
O valor a ser converitdo e a cotação devem ser solicitado ao usuário.
*/
const prompt = require("prompt-sync")();

const real = prompt("Digite o valor em R$: ");
const dolar = prompt("Digite o valor em U$: ");

const res = real / dolar;

console.log("O valor convertido em U$ é:", res);