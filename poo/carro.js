// Classe base Carro
class Carro {
    constructor(ano, cor) {
        this.ano = ano;
        this.cor = cor;
    }

    criarCarro() {
        console.log(`Carro Jeep Renegade criado - Ano: ${this.ano}, Cor: ${this.cor}`);
        console.log("--------------------------");

    }
    

    ligar() {
        console.log("Carro ligado.");
    }

    desligar() {
        console.log("Carro desligado.");
        console.log("--------------------------");

    }

    acelerar() {
        console.log("Carro acelerando...");

    }
}

// Criando dois objetos Carro
const carroVermelho = new Carro(2022, "Vermelho");
const carroAzul = new Carro(2023, "Azul");

carroVermelho.criarCarro();
carroAzul.criarCarro();
carroAzul.ligar()
carroAzul.acelerar()
carroAzul.desligar()

carroVermelho.ligar()
carroVermelho.acelerar()
carroVermelho.desligar()




// Classe Aviao estendendo Carro
class Aviao extends Carro {
    constructor(ano, cor, envergadura) {
        super(ano, cor);
        this.envergadura = envergadura;
    }

    criarAviao() {
        console.log(`Avião Embraer E-195 criado - Ano: ${this.ano}, Cor: ${this.cor}, Envergadura: ${this.envergadura} metros`);
    }
    criarAviao2() {
        console.log(`Avião Boeing 737 - Ano: ${this.ano}, Cor: ${this.cor}, Envergadura: ${this.envergadura} metros`);
    }


    aterrizar() {
        console.log("Avião aterrizando...");
        console.log("--------------------------");

    }

    // Polimorfismo - Modificando acelerar()
    acelerar() {
        console.log("Avião acelerando na pista para decolagem...");
    }
}

// Criando um objeto Avião
const aviao = new Aviao(2024, "Branco", 35.1);
aviao.criarAviao();
aviao.acelerar();
aviao.aterrizar();

const aviao2 = new Aviao(2024, "Azul", 35.1);
aviao.criarAviao();
aviao.acelerar();
aviao.aterrizar();
