export class Dados {

    public jugarDados(apuesta: number): number {
        let resultado: number = 0;
        let dado1: number = Math.floor(Math.random() * 6) + 1;
        let dado2: number = Math.floor(Math.random() * 6) + 1;
        resultado = dado1 + dado2;

        if (resultado == 7 || resultado == 11) {
            console.log(`El resultado es ${resultado}. El usuario ha ganado su apuesta: $${apuesta * 2}`);
            return apuesta * 2;
        } else if (resultado == 2 || resultado == 12) {
            console.log(`El resultado es ${resultado}. El usuario ha ganado dos veces su apuesta: $${apuesta * 3}`);
            return apuesta * 3;
        } else {
            console.log(`El resultado es ${resultado}. El usuario ha perdido su apuesta: $${0}`);
            return 0;
        }
    }
}