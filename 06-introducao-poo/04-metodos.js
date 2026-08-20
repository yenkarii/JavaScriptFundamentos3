class Pessoa{
    #nome;

    constructor(nome, nota){
        this.nome = nome;
        this.nota = nota;
    };

    apresentar(){
        console.log(`${this.nome} - Nota ${nota}`)
    }
}

const aluno1 = new Pessoa("Ana", 10);
const aluno2 = new Pessoa("Kaua", 8);
console.log(aluno1.apresentar());
console.log(aluno2.apresentar());