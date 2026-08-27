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

    atacar() {
        console.log(`${this.nome} está realizando um ataque!!`);
    }

    defender() {
        console.log(`${this.nome} está defendendo!!`);
    }

    receber() {
        console.log(`${this.nome} recebeu a bola!!`);
    }

    treinar() {
        console.log(`${this.nome} está treinando para a próxima partida!!`);
    }

    descansar() {
        console.log(`${this.nome} está descansado ap[os o treino!!`);
    }
}

const jogador1 = new Jogador("Yen Aneki", 17, "Goleiro");
const jogador2 = new Jogador("Iago", 16, "Libero");
const jogador3 = new Jogador("Igor", 17, "Levantador");
const jogador4 = new Jogador("Vinicius", 17, "Central");
const jogador5 = new Jogador("Pedro", 17, "Oposto");

jogador1.apresentar();
jogador2.apresentar();
jogador3.apresentar();
jogador4.apresentar();
jogador5.apresentar();
jogador1.atacar();
jogador2.defender();
jogador3.receber();
jogador4.atacar();
jogador5.treinar();
jogador5.descansar();