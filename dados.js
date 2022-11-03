"use strict";
exports.__esModule = true;
exports.Dados = void 0;
var Dados = /** @class */ (function () {
    function Dados(pApuestaMinima) {
        this.apuestaMinima = pApuestaMinima;
        this.dado1 = 1;
        this.dado2 = 1;
    }
    Dados.prototype.getApuestaMinima = function () {
        return this.apuestaMinima;
    };
    Dados.prototype.setApuestaMinima = function (apuestaMinima) {
        this.apuestaMinima = apuestaMinima;
    };
    Dados.prototype.iniciarDados = function (apuesta) {
        var resultado = 0;
        var dado1 = Math.floor(Math.random() * 6) + 1;
        var dado2 = Math.floor(Math.random() * 6) + 1;
        resultado = dado1 + dado2;
        if ((resultado == 7 || resultado == 11) && (apuesta >= this.apuestaMinima)) {
            console.log("El resultado es ".concat(resultado, ". El jugador ha ganado su apuesta: $").concat(apuesta * 2));
            return apuesta * 2;
        }
        else if ((resultado == 2 || resultado == 12) && (apuesta >= this.apuestaMinima)) {
            console.log("El resultado es ".concat(resultado, ". El jugador ha ganado dos veces su apuesta: $").concat(apuesta * 3));
            return apuesta * 3;
        }
        else if (apuesta >= this.apuestaMinima) {
            console.log("El resultado es ".concat(resultado, ". El jugador ha perdido su apuesta: $").concat(-apuesta));
            return -apuesta;
        }
        else {
            console.log("Su apuesta es menor a la apuesta minima ($".concat(this.apuestaMinima, ")"));
            return 0;
        }
    };
    return Dados;
}());
exports.Dados = Dados;
