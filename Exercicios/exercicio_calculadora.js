/**
 *          --EXERCICIO--
 * 
 * Implemente uma calculadora capaz de executar as 4 operações matemáticas básicas e que recebe os dados via teclado.
 * Três informações devem ser passadas: o primeiro operando, a operação matemática e o segundo operando.
 * Por exemplo:
 * > 20
 * > +
 * > 4
 * > Resultado: 24
 */
const prompt = require("prompt-sync")();

const op1 = Number(prompt("> "));
const op = prompt("> ");
const op2 = Number(prompt("> "));
let res;

switch(op){
    case "+":
        res = op1 + op2;
        break;
    case "-":
        res = op1 - op2;
        break;
    case "*":
        res = op1 * op2;
        break;
    case "/":
        res = op1 / op2;
        break;
    default:
        res = "OPERADOR INVÁLIDO";
        break;

}
console.log("  =");
console.log(">", res);