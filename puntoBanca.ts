export class PuntoYBanca {
    /* private apuestaMinima: number;
    private carta: number;

    constructor(pApuestaMinima: number, pCarta: number) {
        this.apuestaMinima = pApuestaMinima;
        this.carta = pCarta;
    }*/

    public operacionGanadora(apuesta: number, apuestaQuien: string): number {
        let resultadoPunto: number = 0;
        let resultadoBanca: number = 0;
        let cartaPunto1: number = Math.floor(Math.random() * 9) + 1;
        let cartaPunto2: number = Math.floor(Math.random() * 9) + 1;
        let cartaBanca1: number = Math.floor(Math.random() * 9) + 1;
        let cartaBanca2: number = Math.floor(Math.random() * 9) + 1;
        resultadoPunto = cartaPunto1 + cartaPunto2;
        resultadoBanca = cartaBanca1 + cartaBanca2;

        if (resultadoPunto > 10) {
            resultadoPunto -= 10;
        }

        if(resultadoBanca > 10) {
            resultadoBanca -= 10;
        }

        if (resultadoPunto == 8 || resultadoPunto == 9) {
            console.log(`El resultado es ${resultadoPunto}. El usuario ha ganado su apuesta: $${apuesta * 2}`);
            return apuesta * 2;
        } else if (apuestaQuien.toLowerCase() == "punto" && resultadoPunto > resultadoBanca) {
            console.log(`El resultado del Punto es ${resultadoPunto} y el resultado de la Banca es ${resultadoBanca}. El usuario ha ganado su apuesta: $${apuesta * 2}`);
            return apuesta * 2;
        } else if (apuestaQuien.toLowerCase() == "banca" && resultadoBanca > resultadoPunto) {
            console.log(`El resultado de la Banca es ${resultadoBanca} y el resultado del Punto es ${resultadoPunto}. El usuario ha ganado su apuesta: $${apuesta * 2}`);
            return apuesta * 2; 
        } else if (apuestaQuien.toLowerCase() == "empate" && resultadoPunto == resultadoBanca) {
            console.log(`El resultado del Punto es ${resultadoPunto} y el resultado de la Banca es ${resultadoBanca}. El usuario ha ganado su apuesta: $${apuesta * 8}`);
            return apuesta * 8;
        } else {
            console.log(`El resultado del Punto es ${resultadoPunto} y el resultado de la Banca es ${resultadoBanca}. El usuario ha perdido su apuesta: $${0}`);
            return 0;
        }
    }
}

let juego1 = new PuntoYBanca();
juego1.operacionGanadora(500, 'punto');
juego1.operacionGanadora(500, 'BaNcA');
juego1.operacionGanadora(500, 'empAte');