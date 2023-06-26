/*Crie três módulos separados em arquivos distintos: somaArray.js, multiplicaArray.js e calculaMedia.js.
No módulo somaArray.js, exporte uma função chamada somaArray, que recebe um array de números como parâmetro e retorna a soma de todos os elementos.
No módulo multiplicaArray.js, exporte uma função chamada multiplicaArray, que recebe um array de números como parâmetro e retorna a multiplicação de todos os elementos.
No módulo calculaMedia.js, exporte uma função chamada calculaMedia, que recebe um array de números como parâmetro e retorna a média aritmética desses números.
No módulo principal, importe as três funções e solicite ao usuário que insira um array de números.
Utilize as funções importadas para calcular e exibir no console a soma, a multiplicação e a média dos elementos do array fornecido pelo usuário.*/


import {somaArray} from './somaArray.js';
import { multiplicaArray } from "./multiplicaArray.js";
import {calculaMedia} from './calculaMedia.js';

let numbersList = [1, 2, 3, 4, 5, 6];

let soma = somaArray(numbersList);
let mult = multiplicaArray(numbersList);
let media = calculaMedia(numbersList);

console.log(`Os resultados com a lista ${numbersList} são:`)
console.log(`Soma:          ${soma}`)
console.log(`Multiplicação: ${mult}`)
console.log(`Média:         ${media}`)
