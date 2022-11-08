"use strict";
exports.__esModule = true;
var casino_1 = require("./casino");
var dados_1 = require("./dados");
var jugador_1 = require("./jugador");
var puntoBanca_1 = require("./puntoBanca");
var tragamonedas_1 = require("./tragamonedas");
var tragamonedasPoderoso_1 = require("./tragamonedasPoderoso");
// creamos los jugadores
var jugador001 = new jugador_1.Jugador("Pedro", "Alvarez", 34, 1500000);
var jugador002 = new jugador_1.Jugador("Pablo", "Gómes", 28, 250000);
var jugador003 = new jugador_1.Jugador("Ariel", "Durán", 18, 15000);
var jugador004 = new jugador_1.Jugador("Romina", "Perez", 16, 2500);
var jugador005 = new jugador_1.Jugador("Juana", "Dinardo", 30, 55000);
var jugador006 = new jugador_1.Jugador("María", "Fernandez", 54, 75000);
var jugador007 = new jugador_1.Jugador("James", "Bond", 40, 25000);
var jugador008 = new jugador_1.Jugador("Luis", "Mendez", 65, 115000);
var jugador009 = new jugador_1.Jugador("Lu", "Chi", 12, 555);
var jugador010 = new jugador_1.Jugador("Luciana", "Velez", 60, 50000);
// arreglo de jugadores
var arrayJugadores = [jugador001, jugador002, jugador003, jugador004, jugador005, jugador006, jugador007, jugador008, jugador009, jugador010];
// creamos los juegos
var dados1 = new dados_1.Dados(1000);
var puntoYBanca1 = new puntoBanca_1.PuntoYBanca(500);
var tragamonedas1 = new tragamonedas_1.Tragamonedas("animales", 100);
var tragamonedasPoderoso1 = new tragamonedasPoderoso_1.TragamonedasPoderoso("animales", 200, true);
// creamos el casino
var casino1 = new casino_1.Casino(23, "Buenos Aires", tragamonedas1, tragamonedasPoderoso1, dados1, puntoYBanca1);
// pruebas de escritorio para casino
casino1.setSucursal(99);
console.log(casino1.getSucursal());
casino1.setCiudad('Ushuaia');
console.log(casino1.getCiudad());
casino1.validacionAforo(arrayJugadores);
console.log(casino1.getAforo());
// prubas de escritorio de los juegos
casino1.jugarDados(jugador001, 5000);
casino1.jugarPuntoYBanca(jugador001, 2000, "empate");
casino1.jugarTragamonedas(jugador001, 3000);
casino1.jugarTragamonedasPoderoso(jugador001, 3000);
casino1.jugarDados(jugador001, 45000);
casino1.jugarPuntoYBanca(jugador001, 21000, "punto");
casino1.jugarTragamonedas(jugador001, 2000);
casino1.jugarTragamonedasPoderoso(jugador001, 1000);
casino1.jugarDados(jugador001, 1000);
casino1.jugarPuntoYBanca(jugador001, 1000, "banca");
casino1.jugarTragamonedas(jugador001, 460);
casino1.jugarTragamonedasPoderoso(jugador001, 2000);
casino1.jugarDados(jugador001, 10040);
casino1.jugarPuntoYBanca(jugador001, 12000, "punto");
casino1.jugarTragamonedas(jugador001, 12000);
casino1.jugarTragamonedasPoderoso(jugador001, 61000);
casino1.jugarDados(jugador001, 1000);
casino1.jugarPuntoYBanca(jugador001, 200, "empate");
casino1.jugarTragamonedas(jugador001, 10);
casino1.jugarTragamonedasPoderoso(jugador001, 1230);
casino1.jugarDados(jugador001, 12000);
casino1.jugarPuntoYBanca(jugador001, 32200, "banca");
casino1.jugarTragamonedas(jugador001, 1022);
casino1.jugarTragamonedasPoderoso(jugador001, 13330);
// pruebas de escritorio para persona y jugador
jugador010.setNombre('Agustina');
console.log(jugador010.getNombre());
jugador010.setApellido('Smith');
console.log(jugador010.getApellido());
jugador010.setEdad(32);
console.log(jugador010.getEdad());
console.log(jugador010.esMayorEdad());
console.log(jugador001.getDineroInicial());
//jugador001.setBilletera(2500000);
console.log(jugador001.getBilletera());
jugador001.gananciaDelDia();
jugador001.porcentajeOperGanadoras();
jugador001.cambioCategoria();
console.log(jugador001.getCategoria());
console.log(jugador001.getBilletera());
