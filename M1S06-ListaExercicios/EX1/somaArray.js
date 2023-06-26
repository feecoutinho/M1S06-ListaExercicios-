//const numbersList = [1, 2, 3, 4];
//const soma = numbersList.reduce((soma, currentElement) => soma + currentElement)
//console.log(soma)

function somaArray(numbersList) {
    const soma = numbersList.reduce((soma, currentElement) => soma + currentElement);
    return soma;
}

export {somaArray}