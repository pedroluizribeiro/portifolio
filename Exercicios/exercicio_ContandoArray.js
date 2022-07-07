/**
 *      --EXERCICIO--
 * 
 * Escreva uma função que conta quantas vezes determinado elemento está presente dentro de um array.
 * A função deve retornar essa contagem ou 0 se o elemento não existir.
 */
const itens = ["A","A","B","B","B","C"];

console.log(contar(itens, "A"));
console.log(contar(itens, "B"));
console.log(contar(itens, "C"));


function contar(array, elem){ //criada a funcao contar com os parametros array e elem.
    let count = 0; //criada a variavel count que será a contagem dos elementos. 
    for(i of array){ //para i dentro do array, faça...
        if(i == elem){ //se i for igual ao elemento, faça a contagem desse elemento.
            count++;
        }
    }
    return count; //retorne a contagem para dentro da variavel contar.
}