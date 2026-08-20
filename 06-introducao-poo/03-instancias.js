class Pessoa{
    #nome;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    };
}

const aluno1 = new Pessoa("Ana", 17);
const aluno2 = new Pessoa("Kaua", 17);
console.log(aluno1);
console.log(aluno2);