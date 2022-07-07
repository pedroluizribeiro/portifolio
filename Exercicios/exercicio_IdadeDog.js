/**
 *      --EXERCICIO--
 * Escreva uma função que calcula a idade humana equivalente de um cachorro, considerando que cada ano que um
 * cachorro vive equivale a 7 anos de vida humana. O valor da idade deve ser fornecido via teclado.
 * Alem disso, permita que a função possa ser customizada para alterar o valor 7.
 */
const prompt = require("prompt-sync")();

const idade = Number(prompt(">" ));
const idadeH = calculaIdade(idade);

console.log("Idade do cachorro: ", idadeH);

function calculaIdade(idade, padrao = 7){
    return idade * padrao;
}