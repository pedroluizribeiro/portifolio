/**
 *    --EXERCICIO--
 * 
 * Esreva um programa que receba um valor numérico pelo teclado, multipilca por ele mesmo e imprime
 * o resultado.
 * 
 * Se o valor fornecido for maior do que 10, ele deve ser ajustado para 10 antes da multiplicação.
 */

//Neste exercicio não é possível utilziar const para declarar a variavel, pois o valor de num será trocado no IF.
const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número de 1 a 10: "));
const valor = 20;

if(num > valor){
    num = valor;
    console.log("O número digitado foi ajustado para " + valor + ", para fazer a multiplicação.");
    
}

const res = Math.pow(num, 2);

console.log("O resultado é:", res);