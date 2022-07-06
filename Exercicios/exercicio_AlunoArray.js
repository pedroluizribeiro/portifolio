/**
 *      --EXERCÍCIO--
 * Escreva um programa que recebe, via teclado, notas de um aluno. Assim que uma nota em branco for fornecida,
 * o prgrama deve calcular a média das notas fornecidas anteriormente e mostrar na tela.
 */
const prompt = require("prompt-sync")();

const notas = new Array(); //cria o array chamado notas
let nota; //cria a variavel nota que é a nota fornecida pelo usuario
let n = 1;

//utilizado o DO WHILE pois é necessário que o código seja executado pelo menos 1 vez.
do{
    nota = Number(prompt("Nota " + n++ + ": ")); //fornece a nota ao usuário

    if(nota){ //se a nota inserida for verdadeira, ou seja, não for vazia, execute o código.
        notas.push(nota); //insere a nota fornecida dentro do array.
        console.log(notas.toString()); //mostra na tela a nota inserida a cada inserção.
    }
}while(nota) //enquanto a nota não for vazia, repita toda a execução acima.
    
let sum = 0; //declarada uma variavel para somar todos os elementos do array.
for(nota of notas){ //para as notas inseridas dentro do array NOTAS, faça...
    sum += nota;
}
const med = sum / notas.length; // criado variavel med para calcular a media da soma (sum) de todas as notas inseridas no array (notas.length)
    
console.log("Média:", med);
