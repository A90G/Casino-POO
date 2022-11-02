"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(pSucursal, pCiudad, ptragamonedas, ptragamonedasPod, pDados, pPuntoBanca) {
        this.sucursal = pSucursal;
        this.ciudad = pCiudad;
        this.aforo = [];
        this.tragamonedas = ptragamonedas;
        this.tragamonedasPoderoso = ptragamonedasPod;
        this.dados = pDados;
        this.puntoBanca = pPuntoBanca;
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
    Casino.prototype.jugarTragamonedas = function (jugador, apuesta) {
        var resultado = this.tragamonedas.iniciarTragamonedas(apuesta);
        if (jugador.getEdad() >= 18) {
            jugador.setBilletera(resultado + jugador.getBilletera());
        }
        else {
            console.log("El jugador ".concat(jugador.getNombre(), " ").concat(jugador.getApellido(), " es menor de edad, por lo que no puede jugar en el casino"));
        }
    };
    Casino.prototype.jugarTragamonedasPoderoso = function (jugador, apuesta) {
        var resultado = this.tragamonedasPoderoso.iniciarTragamonedasPoderoso(apuesta);
        if (jugador.getEdad() >= 18) {
            jugador.setBilletera(resultado + jugador.getBilletera());
        }
        else {
            console.log("El jugador ".concat(jugador.getNombre(), " ").concat(jugador.getApellido(), " es menor de edad, por lo que no puede jugar en el casino"));
        }
    };
    Casino.prototype.jugarDados = function (jugador, apuesta) {
        var resultado = this.dados.iniciarDados(apuesta);
        if (jugador.getEdad() >= 18) {
            jugador.setBilletera(resultado + jugador.getBilletera());
        }
        else {
            console.log("El jugador ".concat(jugador.getNombre(), " ").concat(jugador.getApellido(), " es menor de edad, por lo que no puede jugar en el casino"));
        }
    };
    Casino.prototype.jugarPuntoYBanca = function (jugador, apuesta, apuestaQuien) {
        var resultado = this.puntoBanca.iniciarPuntoyBanca(apuesta, apuestaQuien);
        if (jugador.getEdad() >= 18) {
            jugador.setBilletera(resultado + jugador.getBilletera());
        }
        else {
            console.log("El jugador ".concat(jugador.getNombre(), " ").concat(jugador.getApellido(), " es menor de edad, por lo que no puede jugar en el casino"));
        }
    };
    return Casino;
}());
exports.Casino = Casino;
