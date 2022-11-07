import * as fs from 'fs'

export class Dados {
    protected apuestaMinima: number;
    protected dado1: number;
    protected dado2: number;
    protected manual:string;

    constructor(pApuestaMinima: number) {
        this.apuestaMinima = pApuestaMinima;
        this.dado1 = 1;
        this.dado2 = 2;
        this.manual = fs.readFileSync('./manuales/manualDados.txt','utf-8');
    }

    public getApuestaMinima(): number {
        return this.apuestaMinima;
    }

    public setApuestaMinima(apuestaMinima: number): void {
        this.apuestaMinima = apuestaMinima;
    }
    
    public iniciarDados(apuesta: number): number {
        console.log(this.manual);
        let resultado: number = 0;
        let dado1: number = Math.floor(Math.random() * 6) + 1;
        let dado2: number = Math.floor(Math.random() * 6) + 1;
        resultado = dado1 + dado2;

        if ((resultado == 7 || resultado == 11) && (apuesta >= this.apuestaMinima)) {
            console.log(`El resultado es ${resultado}. El jugador ha ganado su apuesta: $${apuesta * 2}`);
            return apuesta * 2;
        } else if ((resultado == 2 || resultado == 12) && (apuesta >= this.apuestaMinima)) {
            console.log(`El resultado es ${resultado}. El jugador ha ganado dos veces su apuesta: $${apuesta * 3}`);
            return apuesta * 3;
        } else if (apuesta >= this.apuestaMinima) {
            console.log(`El resultado es ${resultado}. El jugador ha perdido su apuesta: $${-apuesta}`);
            return -apuesta;
        } else {
            throw new Error(`Su apuesta es menor a la apuesta minima ($${this.apuestaMinima})`);
        }
    }
}
