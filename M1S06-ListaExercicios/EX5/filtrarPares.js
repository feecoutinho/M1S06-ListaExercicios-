import {array} from "./exercicio5.js";

function filtraPar() {
    var numeroPar = array.filter((element) => element % 2 === 0);

    console.log(`Números pares: ${numeroPar}`)
}

export {filtraPar}