/**
 *      --EXERCICIO--
 * 
 * Escreva um programa que recebe um valor pelo teclado e imprime se o númer é PAR ou IMPAR
 * 
 * 
 */
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite um valor: "));

if(valor % 2 == 0){
    console.log(valor + " é um número PAR")
}else{
    console.log(valor + " é um número IMPAR")
}