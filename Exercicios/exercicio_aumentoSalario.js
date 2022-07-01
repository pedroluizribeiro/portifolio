/*       --EXERCÍCIO--

Escreva um programa que o novo salario de um funcionario que acabou de receber uma porcentagem de aumento.
O salario e a porcentagem devem ser solicitado pelo usuário.
*/
const prompt = require("prompt-sync")();

const salario = Number(prompt("Digite o seu salário atual: "));
const porc = Number(prompt("Digite a porcentagem do aumento: "));

const aumento = salario * (porc/100);
const res = salario + aumento;

console.log("Seu salário após o aumento é de:", res);