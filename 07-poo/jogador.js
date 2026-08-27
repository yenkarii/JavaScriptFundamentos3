class Jogador {
    constructor(nome, idade, posicao) {
        this.nome = nome;
        this.idade = idade;
        this.posicao = posicao;
    }

    apresentar() {
        console.log(`Meu nome é ${this.nome}!!`);
        console.log(`Tenho ${this.idade} anos!`);
        console.log(`Minha posição é ${this.posicao}!!!!`);
    }

    atacar(){
        console.log(`${this.nome} está realizando um ataque!!`)
    }
}

const jogador1 = new Jogador("Yen Aneki", 17, "Goleiro");

jogador1.apresentar();

jogador1.atacar();