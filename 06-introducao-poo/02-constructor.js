class Pessoa {
    #nome;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    };
}

const pessoa = new Pessoa("Ana", 17);
console.log(pessoa);