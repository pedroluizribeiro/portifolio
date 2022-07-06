/**
 *      --EXERCICIO--
 * Uma determinada cidade teve as seguintes temperaturas neste ano: 12.3,22.0,25.5,9.9,14.4,18.6
 * Crie um programa que calcule a temperatura minima e maxima registradas, bem como a temperatura media.
 */

const temperatura = new Array(12.3,22.0,25.5,9.9,14.4,18.6);

let min = null;
let max = null;
let med = 0;

for(const temp of temperatura){
    if(temp < min || min == null){
        min = temp;
    }else if(temp > max || max == null){
        max = temp;
    }

    med += temp;
}

med /= temperatura.length;

console.log("Min", min);
console.log("Max", max);
console.log("Media", med);