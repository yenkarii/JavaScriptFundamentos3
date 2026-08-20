class Funcionario{
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }
}

class Professor extends Funcionario{
    constructor(nome, salario, disciplina){
        super(nome, salario);
        this.disciplina;
    }
}

const professor = new Professor("Jansen", 50000, "Devops");
console.log(professor);