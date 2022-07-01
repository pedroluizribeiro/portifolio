/**
 *      --EXERCÍCIO--
 * 
 * Escreva um programa que solicita um texto ao usuário e mostra na tela o mesmo texto onde cada caractere é separado por um espaço em branco.
 */


// é preciso saber o tamanho da sting para varre-la e adicionar o espaço em branco. Usar o length para saber o tamanho
const prompt = require("prompt-sync")();

const txt = prompt("Digite o texto: ");
const delim = " ";
let novoTxt = "";

for(let n=0; n<txt.length; n++){
    const c = txt.charAt(n); //pega caractere por caractere
    novoTxt = novoTxt + c + delim;
}
console.log(novoTxt);