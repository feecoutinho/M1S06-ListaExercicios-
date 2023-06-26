import {array} from "./exercicio5.js";

function somarImpar() {
    var soma = (array.filter((element) => element % 2 === 1)).reduce((total, cur_elem)=> total += cur_elem);
    console.log(`Soma dos impares: ${soma}`)
}

export {somarImpar}