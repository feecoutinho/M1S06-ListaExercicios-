/*const numbersList = [1, 2, 3, 4];

const media = numbersList.reduce((total, valor, indice, array) => {total += valor;
if( indice == array.length-1) {
    return total/array.length;
}   else {
    return total;
}
});

console.log(media)*/

function calculaMedia(numbersList) {
    const media = numbersList.reduce((total, valor, indice, array) => {total += valor;
        if( indice == array.length-1) {
            return total/array.length;
        }   else {
            return total;
        }
        });
    return media; 
}

export {calculaMedia}