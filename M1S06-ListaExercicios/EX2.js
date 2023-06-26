/*Crie um array com uma lista de objetos, cada um representando um aluno. Cada aluno deve possuir as propriedades nome (string), nota1 (number) e nota2 (number).
Utilize uma função de array, como map, filter ou reduce, para calcular a média das notas de cada aluno.
Crie um novo array contendo objetos com as propriedades nome e media, onde media é a média das notas.
Exiba o array resultante no console, ordenado em ordem decrescente de média.*/

const alunos = [{
    nome: 'Harry',
    nota1: 8,
    nota2: 7

},{
    nome: 'Rony',
    nota1: 7,
    nota2: 6

},{
    nome: 'Hermione',
    nota1: 10,
    nota2: 10

},{ 
    nome: 'Neville',
    nota1: 4,
    nota2: 7

},{
    nome: 'Luna',
    nota1: 8,
    nota2: 7
},

]

var AlunosMedia = alunos.map(aluno => {
var somaNotas = aluno.nota1 + aluno.nota2;

var mediaAluno = {
    nome: aluno.nome,
    media: somaNotas / 2
};
return mediaAluno})

console.log(AlunosMedia)

/*Ordem crescente*/
AlunosMedia.sort(function(a, b){
    if (a.media < b.media) {
        return -1;
    } else{
        return true
    }
});

console.log(AlunosMedia)