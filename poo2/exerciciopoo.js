/**
 * POO
 * Abstração, Herança e Polimosfismo
 * @author Eder Silva
 */

// Classe modelo (iniciar sempre com letra maiúscula)
// Classe base Carro
class Carro {
    constructor(ano, cor) {
        this.ano = ano;
        this.cor = cor;
    }

    criarCarro() {
        console.log(`Carro Jeep Renegade criado - Ano: ${this.ano}, Cor: ${this.cor}`);
    }

    ligar() {
        console.log("Carro ligado.");
    }

    desligar() {
        console.log("Carro desligado.");
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

// Classe Aviao estendendo Carro
class Aviao extends Carro {
    constructor(ano, cor, envergadura) {
        super(ano, cor);
        this.envergadura = envergadura;
    }

    criarAviao() {
        console.log(`Avião Embraer E-195 criado - Ano: ${this.ano}, Cor: ${this.cor}, Envergadura: ${this.envergadura} metros`);
    }

    aterrizar() {
        console.log("Avião aterrizando...");
    }

    // Polimorfismo - Modificando acelerar()
    acelerar() {
        console.log("Avião acelerando na pista para decolagem...");
    }
}

// Criando um objeto Avião
const aviao = new Aviao(2024, "Branco", 35.1);
aviao.criarAviao();