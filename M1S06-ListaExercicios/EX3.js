/*Crie uma classe chamada Livro com as propriedades titulo (string), autor (string) e anoPublicacao (number).
Implemente um método na classe chamado obterInformacoes, que retorna uma string formatada com as informações do livro.
Crie três objetos da classe Livro, cada um representando um livro diferente.
Exiba no console as informações de cada livro, utilizando o método obterInformacoes.*/

class Livro {
    constructor(titulo, autor, anoPublicacao) {
      this.titulo = titulo;
      this.autor = autor;
      this.anoPublicacao = anoPublicacao;
    }

    obterInfos() {
        console.log(`O título do livro é ${this.titulo}`)
        console.log(`O autor do livro é ${this.autor}`)
        console.log(`O livro foi publicado em ${this.anoPublicacao}`)
    }
} 

const HP1 = new Livro ('Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 1997)
const HP2 = new Livro ('Harry Potter e a Câmara Secreta', 'J.K. Rowling', 1998)
const HP3 = new Livro ('Harry Potter e o Prisioneiro de Azkaban', 'J.K. Rowling', 1999)

HP1.obterInfos()
HP2.obterInfos()
HP3.obterInfos()