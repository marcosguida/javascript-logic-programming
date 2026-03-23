// Exemplo OOP: Classe Pessoa com herança (nível intermediário)

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  falar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

class Aluno extends Pessoa {
  constructor(nome, idade, curso) {
    super(nome, idade);
    this.curso = curso;
  }
  estudar() {
    return `${this.nome} está estudando ${this.curso}.`;
  }
}

const a = new Aluno('Marcos', 28, 'JavaScript');
console.log(a.falar());
console.log(a.estudar());
