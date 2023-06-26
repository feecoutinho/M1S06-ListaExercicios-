//const numbersList = [1, 2, 3, 4];
//const multiplica = numbersList.reduce((multiplica, currentElement) => multiplica * currentElement)
//console.log(multiplica)

function multiplicaArray(numbersList) {
    const multiplica = numbersList.reduce((multiplica, currentElement) => multiplica * currentElement)
    return multiplica;
}

export {multiplicaArray};