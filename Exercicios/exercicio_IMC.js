/*       --EXERCÍCIO--

Escreva um programa que com base no peso e na altura de uma pessoa calcule o IMC
O calculo do IMC é dado pelo peso dividido pela altura elevada ao quadrado.
*/
const prompt = require("prompt-sync")();

const peso = Number(prompt("Digite o seu peso: "));
const altura = Number(prompt("Digite sua altura em metros: "));

const imc = peso / Math.pow(altura,2);

console.log("Seu IMC é de:", imc);