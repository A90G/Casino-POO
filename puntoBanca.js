"use strict";
exports.__esModule = true;
exports.PuntoYBanca = void 0;
var fs = require("fs");
var PuntoYBanca = /** @class */ (function () {
    function PuntoYBanca(pApuestaMinima) {
        this.apuestaMinima = pApuestaMinima;
        this.cartaPunto1 = 1;
        this.cartaPunto2 = 1;
        this.cartaBanca1 = 1;
        this.cartaBanca2 = 1;
        this.manual = fs.readFileSync('./manuales/manualPuntoBanca.txt', 'utf-8');
    }
    PuntoYBanca.prototype.getApuestaMinima = function () {
        return this.apuestaMinima;
    };
    PuntoYBanca.prototype.setApuestaMinima = function (apuestaMinima) {
        this.apuestaMinima = apuestaMinima;
    };
    PuntoYBanca.prototype.iniciarPuntoyBanca = function (apuesta, apuestaQuien) {
        console.log(this.manual);
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
        if ((resultadoPunto == 8 || resultadoPunto == 9) && (apuesta >= this.apuestaMinima)) {
            console.log("El resultado es ".concat(resultadoPunto, ". El jugador ha ganado su apuesta: $").concat(apuesta * 2));
            return apuesta * 2;
        }
        else if (apuestaQuien.toLowerCase() == "punto" && resultadoPunto > resultadoBanca && apuesta >= this.apuestaMinima) {
            console.log("El resultado del Punto es ".concat(resultadoPunto, " y el resultado de la Banca es ").concat(resultadoBanca, ". El jugador ha ganado su apuesta: $").concat(apuesta * 2));
            return apuesta * 2;
        }
        else if (apuestaQuien.toLowerCase() == "banca" && resultadoBanca > resultadoPunto && apuesta >= this.apuestaMinima) {
            console.log("El resultado de la Banca es ".concat(resultadoBanca, " y el resultado del Punto es ").concat(resultadoPunto, ". El jugador ha ganado su apuesta: $").concat(apuesta * 2));
        }
        else if (apuestaQuien.toLowerCase() == "empate" && resultadoPunto == resultadoBanca && apuesta >= this.apuestaMinima) {
            console.log("El resultado del Punto es ".concat(resultadoPunto, " y el resultado de la Banca es ").concat(resultadoBanca, ". El jugador ha ganado su apuesta: $").concat(apuesta * 8));
            return apuesta * 8;
        }
        else if (apuesta >= this.apuestaMinima) {
            console.log("El resultado del Punto es ".concat(resultadoPunto, " y el resultado de la Banca es ").concat(resultadoBanca, ". El jugador ha perdido su apuesta: $").concat(-apuesta));
            return -apuesta;
        }
        else {
            console.log("Su apuesta es menor a la apuesta minima ($".concat(this.apuestaMinima, ")"));
            return 0;
        }
    };
    return PuntoYBanca;
}());
exports.PuntoYBanca = PuntoYBanca;
