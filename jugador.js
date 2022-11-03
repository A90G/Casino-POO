"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Jugador = void 0;
var persona_1 = require("./persona");
var Jugador = /** @class */ (function (_super) {
    __extends(Jugador, _super);
    function Jugador(pNombre, pApellido, pEdad, pDineroInicial) {
        var _this = _super.call(this, pNombre, pApellido, pEdad) || this;
        _this.dineroInicial = pDineroInicial;
        _this.billetera = pDineroInicial;
        _this.apalancamiento = 1;
        _this.categoria = "Jugador Comun";
        return _this;
    }
    Jugador.prototype.getDineroInicial = function () {
        return this.dineroInicial;
    };
    Jugador.prototype.setDineroInicial = function (dineroInicial) {
        this.dineroInicial = dineroInicial;
    };
    Jugador.prototype.getBilletera = function () {
        return this.billetera;
    };
    Jugador.prototype.setBilletera = function (dinero) {
        this.billetera = dinero;
    };
    Jugador.prototype.gananciaDelDia = function () {
        var ganancia = (this.getBilletera() - this.dineroInicial);
        console.log("El resultado del dia del jugador es: $".concat(ganancia));
        return ganancia;
    };
    Jugador.prototype.porcentajeOperGanadoras = function () {
        var porcentaje = (this.gananciaDelDia() / this.dineroInicial) * 100;
        console.log("El jugador tiene un porcentaje de operaciones ganadores de ".concat(porcentaje, "%"));
        return porcentaje;
    };
    Jugador.prototype.cambioCategoria = function () {
        if (this.dineroInicial >= 100000 && this.porcentajeOperGanadoras() >= 45) {
            this.categoria = "Jugador VIP";
            this.setBilletera(this.dineroInicial * 0.2 + this.getBilletera());
            console.log("Felicitaciones! usted es un \"Jugador VIP\", le regalamos ".concat(this.dineroInicial * 0.2));
        }
        else {
            this.categoria = "Jugador Comun";
        }
        console.log("El jugador tiene la siguiente categor\u00EDa: ".concat(this.getCategoria()));
    };
    Jugador.prototype.getCategoria = function () {
        return this.categoria;
    };
    return Jugador;
}(persona_1.Persona));
exports.Jugador = Jugador;
