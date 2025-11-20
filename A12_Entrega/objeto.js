// Exercicio 1

const contador = {
    valor: 0,
    incremento: 1, 

    contar(vezes) {
        for (let i = 0; i < vezes; i++) {
            this.valor = this.valor + this.incremento;
        }
        console.log(`valor final: ${this.valor}`);
    }
};

contador.contar(10);

// Exercicio 2

const termometro = {
    temperatura: 20,

    alterar(valor) {
        this.temperatura += valor;
    },

    simular(vezes) {
        for (let i = 0; i < vezes; i++) {
            if (Math.random() < 0.5) {
                this.alterar(-1);
            } else {
                this.alterar(1);
            }
        }

        console.log(`Temperatura final: ${this.temperatura}°C`);
    }
};

termometro.simular(10);

// Exercicio 3

const investimento = {
    capitalInicial: 1000,
    taxaJuros: 0.02,

    simular(anos) {
        let capital = this.capitalInicial;

        for (let i = 0; i < anos; i++) {
            capital = capital * (1 + this.taxaJuros);
        }

        console.log(
            "Capital após", 
            anos, 
            "anos:", 
            capital.toFixed(2)
        );
    }
};

investimento.simular(5);
