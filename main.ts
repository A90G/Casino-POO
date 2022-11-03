import { Casino } from "./casino";
import { Dados } from "./dados";
import { Jugador } from "./jugador";
import { PuntoYBanca } from "./puntoBanca";
import { Tragamonedas } from "./tragamonedas";
import { TragamonedasPoderoso } from "./tragamonedasPoderoso";
// import { Persona } from "./persona";

let jugador001: Jugador = new Jugador("Pedro","Alvarez", 34, 100000);
let jugador002: Jugador = new Jugador("Pablo","Gómes", 28, 250000);
let jugador003: Jugador = new Jugador("Ariel","Durán", 18, 15000);
let jugador004: Jugador = new Jugador("Romina","Perez", 16, 2500);
let jugador005: Jugador = new Jugador("Juana","Dinardo", 30, 55000);
let jugador006: Jugador = new Jugador("María","Fernandez", 54, 75000);
let jugador007: Jugador = new Jugador("James","Bond", 40, 2500000);
let jugador008: Jugador = new Jugador("Luis","Mendez", 12, 1150);
let jugador009: Jugador = new Jugador("Lu","Chi", 74, 555000);
let jugador010: Jugador = new Jugador("Luciana","Velez", 60, 500000);

let arrayJugadores: Jugador[] = [jugador001, jugador002, jugador003, jugador004, jugador005, jugador006, jugador007, jugador008, jugador009, jugador010];

let dados1: Dados = new Dados(100);
let puntoYBanca1: PuntoYBanca = new PuntoYBanca(100);
let tragamonedas1: Tragamonedas = new Tragamonedas("animales", 10);
let tragamonedasPoderoso1: TragamonedasPoderoso = new TragamonedasPoderoso("animales", 50, true);

let casino1: Casino = new Casino (23, "Buenos Aires", tragamonedas1, tragamonedasPoderoso1, dados1, puntoYBanca1);
casino1.setSucursal(99);
console.log(casino1.getSucursal());
casino1.setCiudad('Tierra del Fuego');
console.log(casino1.getCiudad());
casino1.validacionAforo(arrayJugadores);
console.log(casino1.getAforo());

casino1.jugarTragamonedas(jugador001, 5);
casino1.jugarTragamonedasPoderoso(jugador001, 1000);
casino1.jugarDados(jugador001, 2000);
casino1.jugarPuntoYBanca(jugador001, 90, "empate");
casino1.jugarTragamonedas(jugador001, 1000);
casino1.jugarTragamonedasPoderoso(jugador001, 5000);
casino1.jugarDados(jugador001, 4000);
casino1.jugarPuntoYBanca(jugador001, 1000, "punto");
casino1.jugarTragamonedas(jugador001, 100);
casino1.jugarTragamonedasPoderoso(jugador001, 6000);
casino1.jugarDados(jugador001, 1499);
casino1.jugarPuntoYBanca(jugador001, 1230, "banca");
casino1.jugarTragamonedas(jugador001, 5);
casino1.jugarTragamonedasPoderoso(jugador001, 1000);
casino1.jugarDados(jugador001, 2000);
casino1.jugarPuntoYBanca(jugador001, 90, "empate");
casino1.jugarTragamonedas(jugador001, 1000);
casino1.jugarTragamonedasPoderoso(jugador001, 5000);
casino1.jugarDados(jugador001, 4000);
casino1.jugarPuntoYBanca(jugador001, 1000, "punto");
casino1.jugarTragamonedas(jugador001, 100);
casino1.jugarTragamonedasPoderoso(jugador001, 6000);
casino1.jugarDados(jugador001, 1499);
casino1.jugarPuntoYBanca(jugador001, 1230, "banca");
casino1.jugarTragamonedas(jugador001, 5);
casino1.jugarTragamonedasPoderoso(jugador001, 1000);
casino1.jugarDados(jugador001, 2000);
casino1.jugarPuntoYBanca(jugador001, 90, "empate");
casino1.jugarTragamonedas(jugador001, 1000);
casino1.jugarTragamonedasPoderoso(jugador001, 5000);
casino1.jugarDados(jugador001, 4000);
casino1.jugarPuntoYBanca(jugador001, 1000, "punto");
casino1.jugarTragamonedas(jugador001, 100);
casino1.jugarTragamonedasPoderoso(jugador001, 6000);
casino1.jugarDados(jugador001, 1499);
casino1.jugarPuntoYBanca(jugador001, 1230, "banca");


jugador001.setNombre('Lucas');
console.log(jugador001.getNombre());
jugador001.setApellido('Vela');
console.log(jugador001.getApellido());
jugador001.setEdad(37);
console.log(jugador001.getEdad());
console.log(jugador001.esMayorEdad());

//jugador001.setDineroInicial(150000);
//console.log(jugador001.getDineroInicial());
console.log(jugador001.getBilletera());
//jugador001.setBilletera(10);
jugador001.gananciaDelDia();
jugador001.porcentajeOperGanadoras();
jugador001.cambioCategoria();
console.log(jugador001.getCategoria());
console.log(jugador001.getBilletera());
