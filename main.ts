import { Casino } from "./casino";
import { Dados } from "./dados";
import { Jugador } from "./jugador";
import { PuntoYBanca } from "./puntoBanca";
import { Tragamonedas } from "./tragamonedas";
import { TragamonedasPoderoso } from "./tragamonedasPoderoso";

// creamos los jugadores

let jugador001: Jugador = new Jugador("Pedro","Alvarez", 34, 1500000);
let jugador002: Jugador = new Jugador("Pablo","Gómes", 28, 250000);
let jugador003: Jugador = new Jugador("Ariel","Durán", 18, 15000);
let jugador004: Jugador = new Jugador("Romina","Perez", 16, 2500);
let jugador005: Jugador = new Jugador("Juana","Dinardo", 30, 55000);
let jugador006: Jugador = new Jugador("María","Fernandez", 54, 75000);
let jugador007: Jugador = new Jugador("James","Bond", 40, 25000);
let jugador008: Jugador = new Jugador("Luis","Mendez", 65, 115000);
let jugador009: Jugador = new Jugador("Lu","Chi", 12, 555);
let jugador010: Jugador = new Jugador("Luciana","Velez", 60, 50000);

// arreglo de jugadores

let arrayJugadores: Jugador[] = [jugador001, jugador002, jugador003, jugador004, jugador005, jugador006, jugador007, jugador008, jugador009, jugador010];

// creamos los juegos

let dados1: Dados = new Dados(1000);
let puntoYBanca1: PuntoYBanca = new PuntoYBanca(500);
let tragamonedas1: Tragamonedas = new Tragamonedas("animales", 100);
let tragamonedasPoderoso1: TragamonedasPoderoso = new TragamonedasPoderoso("animales", 200, true);

// creamos el casino

let casino1: Casino = new Casino (23, "Buenos Aires", tragamonedas1,tragamonedasPoderoso1, dados1, puntoYBanca1);

// pruebas de escritorio para casino

/* casino1.setSucursal(99);
console.log(casino1.getSucursal());
casino1.setCiudad('Ushuaia');
console.log(casino1.getCiudad());
casino1.validacionAforo(arrayJugadores);
console.log(casino1.getAforo()); */

// prubas de escritorio de los juegos

casino1.jugarDados(jugador001, 500000);
casino1.jugarPuntoYBanca(jugador001, 2000, "empate");
casino1.jugarTragamonedas(jugador001, 3000);
casino1.jugarTragamonedasPoderoso(jugador001, 3000);
/* casino1.jugarDados(jugador001, 4500);
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
casino1.jugarTragamonedasPoderoso(jugador001, 6100);
casino1.jugarDados(jugador001, 1000);
casino1.jugarPuntoYBanca(jugador001, 200, "empate");
casino1.jugarTragamonedas(jugador001, 10);
casino1.jugarTragamonedasPoderoso(jugador001, 1230);
casino1.jugarDados(jugador001, 12000);
casino1.jugarPuntoYBanca(jugador001, 32200, "banca");
casino1.jugarTragamonedas(jugador001, 1022);
casino1.jugarTragamonedasPoderoso(jugador001, 13330); */

// pruebas de escritorio para persona y jugador

/* jugador010.setNombre('Agustina');
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

console.log(jugador001.getBilletera()); */