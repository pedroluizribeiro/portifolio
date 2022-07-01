/**
 *          --EXERCICIO--
 * 
 * Escreva um programa que, com base em um idade fornecida, classifica as pessoas nos grupos abaixo:
 * 
 *  - CRIANÇA: 0 a 12 anos;
 *  - ADOLESCENTE: 13 a 17 anos;
 *  - ADULTO: 18 a 65 anos;
 *  - IDOSO: 66 anos ou mais;
 * 
 * Idades negativas ou acima de 110 anos devem ser consideradas inválidas.
 */
const prompt = require("prompt-sync")();

const idade = Number(prompt("Digite uma idade: "));
let grupo;

if(idade >= 0 && idade <= 12){
    grupo = "VOCÊ ESTÁ NO GRUPO DAS CRIANÇAS!!";
}else if(idade >= 13 && idade <= 17){
    grupo = "VOCÊ ESTÁ NO GRUPO DOS ADOLESCENTES!!"
}else if(idade >= 18 && idade <= 65){
    grupo = "VOCÊ ESTÁ NO GRUPO DOS ADULTOS!!";
}else if(idade >= 66 && idade <= 110){
    grupo = "VOCÊ ESTÁ NO GRUPO DOS IDOSOS!!";
}else{
    grupo = "IDADE INVÁLIDA!!!";
}

console.log(grupo);