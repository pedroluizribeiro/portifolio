/**
 *      --EXERCÍCIO--
 * 
 * Crie um jogo de adivinhação numérica. O computador deve sortear um número aleatório dentro de um intervalo e você deve tentar descobri-lo.
 * A cada tentativa, o programa diz se o número é maior ou menor que o número tentado.
 * O jogo acaba quando o número tentado for o número correto.
 */
const prompt = require("prompt-sync")();

const min = 1;
const max = 100;
/*Math.random() gera um número aleatório de 0.1 até 0.9999999. Para delimitar o intervalo desse número aleatório,
deve-se multiplicar pelo (valor max - valor min + 1) + valor min. (max - min daria 99, o + 1 é para voltar ao 100 e +min é para nao ir de 0 a 99)
O Math.trunc é para retirar casas decimais.*/
const secret = Math.trunc(Math.random() * (max - min + 1) + min);
let play = true;

while(play){
    const num = Number(prompt("> "));

    if(num == secret){
        play = false;
    }else if(num < secret){
        console.log("O número secreto é maior...");
    }else{
        console.log("O número secreto é menor...");
    }
}

console.log("O jogo acabou! O número secreto era", secret);