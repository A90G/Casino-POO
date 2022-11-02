"use strict";
exports.__esModule = true;
exports.Tragamonedas = void 0;
var Tragamonedas = /** @class */ (function () {
    function Tragamonedas(pTematica, pApuestaMinima) {
        this.tematica = pTematica;
        this.apuestaMinima = pApuestaMinima;
    }
    Tragamonedas.prototype.getTematica = function () {
        return this.tematica;
    };
    Tragamonedas.prototype.setTematica = function (pTematica) {
        this.tematica = pTematica;
    };
    Tragamonedas.prototype.getApuestaMinima = function () {
        return this.apuestaMinima;
    };
    Tragamonedas.prototype.setApuestaMinima = function (pApuestaMinima) {
        this.apuestaMinima = pApuestaMinima;
    };
    Tragamonedas.prototype.iniciarTragamonedas = function (apuesta) {
        var lugar1 = Math.floor(Math.random() * 2) + 1;
        var lugar2 = Math.floor(Math.random() * 2) + 1;
        var lugar3 = Math.floor(Math.random() * 2) + 1;
        var combinacion = "".concat(lugar1, " ").concat(lugar2, " ").concat(lugar3);
        if ((lugar1 === lugar2 && lugar2 === lugar3) && (apuesta >= this.apuestaMinima)) {
            console.log("La combinaci\u00F3n es ".concat(combinacion, ". El jugador ha ganado su apuesta: $").concat(apuesta * 2));
            return apuesta * 2;
        }
        else if (apuesta >= this.apuestaMinima) {
            console.log("La combinaci\u00F3n es ".concat(combinacion, ". El jugador ha perdido su apuesta: $").concat(-apuesta));
            return -apuesta;
        }
        else {
            console.log("Su apuesta es menor a la apuesta minima ($".concat(this.apuestaMinima, ")"));
            return 0;
        }
    };
    return Tragamonedas;
}());
exports.Tragamonedas = Tragamonedas;
