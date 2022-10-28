"use strict";
exports.__esModule = true;
exports.PuntoYBanca = void 0;
var PuntoYBanca = /** @class */ (function () {
    function PuntoYBanca() {
    }
    /* private apuestaMinima: number;
    private carta: number;

    constructor(pApuestaMinima: number, pCarta: number) {
        this.apuestaMinima = pApuestaMinima;
        this.carta = pCarta;
    }*/
    PuntoYBanca.prototype.operacionGanadora = function (apuesta, apuestaQuien) {
        var resultadoPunto = 0;
        var resultadoBanca = 0;
        var cartaPunto1 = Math.floor(Math.random() * 9) + 1;
        var cartaPunto2 = Math.floor(Math.random() * 9) + 1;
        var cartaBanca1 = Math.floor(Math.random() * 9) + 1;
        var cartaBanca2 = Math.floor(Math.random() * 9) + 1;
        resultadoPunto = cartaPunto1 + cartaPunto2;
        resultadoBanca = cartaBanca1 + cartaBanca2;
        if (resultadoPunto > 10) {
            resultadoPunto -= 10;
        }
        if (resultadoBanca > 10) {
            resultadoBanca -= 10;
        }
        if (resultadoPunto == 8 || resultadoPunto == 9) {
            console.log("El resultado es ".concat(resultadoPunto, ". El usuario ha ganado su apuesta: $").concat(apuesta * 2));
            return apuesta * 2;
        }
        else if (apuestaQuien.toLowerCase() == "punto" && resultadoPunto > resultadoBanca) {
            console.log("El resultado del Punto es ".concat(resultadoPunto, " y el resultado de la Banca es ").concat(resultadoBanca, ". El usuario ha ganado su apuesta: $").concat(apuesta * 2));
            return apuesta * 2;
        }
        else if (apuestaQuien.toLowerCase() == "banca" && resultadoBanca > resultadoPunto) {
            console.log("El resultado de la Banca es ".concat(resultadoBanca, " y el resultado del Punto es ").concat(resultadoPunto, ". El usuario ha ganado su apuesta: $").concat(apuesta * 2));
            return apuesta * 2;
        }
        else if (apuestaQuien.toLowerCase() == "empate" && resultadoPunto == resultadoBanca) {
            console.log("El resultado del Punto es ".concat(resultadoPunto, " y el resultado de la Banca es ").concat(resultadoBanca, ". El usuario ha ganado su apuesta: $").concat(apuesta * 8));
            return apuesta * 8;
        }
        else {
            console.log("El resultado del Punto es ".concat(resultadoPunto, " y el resultado de la Banca es ").concat(resultadoBanca, ". El usuario ha perdido su apuesta: $").concat(0));
            return 0;
        }
    };
    return PuntoYBanca;
}());
exports.PuntoYBanca = PuntoYBanca;
var juego1 = new PuntoYBanca();
juego1.operacionGanadora(500, 'punto');
juego1.operacionGanadora(500, 'BaNcA');
juego1.operacionGanadora(500, 'empAte');
