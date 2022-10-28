"use strict";
exports.__esModule = true;
exports.Dados = void 0;
var Dados = /** @class */ (function () {
    function Dados() {
    }
    /*private puntos: number;

    constructor(pPuntos: number) {
        this.puntos = pPuntos;
    }*/
    Dados.prototype.operacionGanadora = function (apuesta) {
        var resultado = 0;
        var dado1 = Math.floor(Math.random() * 6) + 1;
        var dado2 = Math.floor(Math.random() * 6) + 1;
        resultado = dado1 + dado2;
        if (resultado == 7 || resultado == 11) {
            console.log("El resultado es ".concat(resultado, ". El usuario ha ganado su apuesta: $").concat(apuesta * 2));
            return apuesta * 2;
        }
        else if (resultado == 2 || resultado == 12) {
            console.log("El resultado es ".concat(resultado, ". El usuario ha ganado dos veces su apuesta: $").concat(apuesta * 3));
            return apuesta * 3;
        }
        else {
            console.log("El resultado es ".concat(resultado, ". El usuario ha perdido su apuesta: $").concat(0));
            return 0;
        }
    };
    return Dados;
}());
exports.Dados = Dados;
var dadosPrueba = new Dados();
dadosPrueba.operacionGanadora(1000);
