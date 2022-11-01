"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var jugador_1 = require("./jugador");
var Casino = /** @class */ (function () {
    function Casino(pSucursal, pCiudad) {
        this.sucursal = pSucursal;
        this.ciudad = pCiudad;
        this.aforo = [];
    }
    Casino.prototype.getSucursal = function () {
        return this.sucursal;
    };
    Casino.prototype.setSucursal = function (pSucursal) {
        return this.sucursal = pSucursal;
    };
    Casino.prototype.getCiudad = function () {
        return this.ciudad;
    };
    Casino.prototype.setCiudad = function (pCiudad) {
        return this.ciudad = pCiudad;
    };
    Casino.prototype.getAforo = function () {
        return this.aforo;
    };
    Casino.prototype.validacionAforo = function (jugadores) {
        for (var i = 0; i < jugadores.length; i++) {
            if (jugadores[i].esMayorEdad() === true) {
                this.aforo.push(jugadores[i]);
                console.log("El jugador ".concat(jugadores[i].getNombre(), " ").concat(jugadores[i].getApellido(), " ha ingresado en el casino ya que tiene ").concat(jugadores[i].getEdad(), " a\u00F1os"));
            }
        }
        return this.aforo;
    };
    return Casino;
}());
exports.Casino = Casino;
var jugador001 = new jugador_1.Jugador("Pedro", "Alvarez", 34, 25000);
var jugador002 = new jugador_1.Jugador("Pablo", "Gómes", 28, 250000);
var jugador003 = new jugador_1.Jugador("Ariel", "Durán", 18, 15000);
var jugador004 = new jugador_1.Jugador("Romina", "Perez", 16, 2500);
var jugador005 = new jugador_1.Jugador("Juana", "Dinardo", 30, 55000);
var jugador006 = new jugador_1.Jugador("María", "Fernandez", 12, 75000);
var jugador007 = new jugador_1.Jugador("James", "Bond", 40, 2500000);
var jugador008 = new jugador_1.Jugador("Luis", "Mendez", 46, 115000);
var jugador009 = new jugador_1.Jugador("Lu", "Chi", 74, 555000);
var jugador010 = new jugador_1.Jugador("Luciana", "Velez", 37, 50000);
var arreglo_Jugadores = [jugador001, jugador002, jugador003, jugador004, jugador005, jugador006, jugador007, jugador008, jugador009, jugador010];
var casinoROYALE = new Casino(23, "Buenos Aires");
casinoROYALE.validacionAforo(arreglo_Jugadores);
console.log(casinoROYALE.getAforo());
/* public cuentaCorriente(): void {
   let creditoCuenta = this.dineroFinal - this.creditoInicial();
   console.log(`El jugador ${this.nombre} tiene ${creditoCuenta} de credito en cuenta`);
} */ 
