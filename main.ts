import { Casino } from "./casino";
import { Dados } from "./dados";
import { Jugador } from "./jugador";
import { PuntoYBanca } from "./puntoBanca";
import { Tragamonedas } from "./tragamonedas";
import { TragamonedasPoderoso } from "./tragamonedasPoderoso";
// import { Persona } from "./persona";

let jugador001: Jugador = new Jugador("Pedro","Alvarez", 34, 25000);
let jugador002: Jugador = new Jugador("Pablo","Gómes", 28, 250000);
let jugador003: Jugador = new Jugador("Ariel","Durán", 18, 15000);
let jugador004: Jugador = new Jugador("Romina","Perez", 16, 2500);
let jugador005: Jugador = new Jugador("Juana","Dinardo", 30, 55000);
let jugador006: Jugador = new Jugador("María","Fernandez", 54, 75000);
let jugador007: Jugador = new Jugador("James","Bond", 40, 2500000);
let jugador008: Jugador = new Jugador("Luis","Mendez", 65, 115000);
let jugador009: Jugador = new Jugador("Lu","Chi", 74, 555000);
let jugador010: Jugador = new Jugador("Luciana","Velez", 60, 50000);
let arrayJugadores: Jugador[] = [jugador001, jugador002, jugador003, jugador004, jugador005, jugador006, jugador007, jugador008, jugador009, jugador010];
/* jugador001.setNombre('Ramiro');
console.log(jugador001.getNombre());
jugador001.setApellido('Cofreces');
console.log(jugador001.getApellido());
jugador001.setEdad(32);
console.log(jugador001.getEdad());
console.log(jugador001.esMayorEdad());
jugador001.setDineroInicial(75000);
console.log(jugador001.getDineroInicial());
console.log(jugador001.getDineroFinal()); // Revisar
jugador001.apalancamientoAprobado();
jugador001.cambioCategoria();
console.log(jugador001.creditoInicial());
console.log(jugador001.gananciaDelDia());
console.log(jugador001.getApalancamiento());
console.log(jugador001.getCategoria()); // Revisar
console.log(jugador001.porcentajeOperGanadoras()); */

let dados1: Dados = new Dados();
// dados1.iniciarDados(1000);

let puntoYBanca1: PuntoYBanca = new PuntoYBanca();
// puntoYBanca1.iniciarPuntoyBanca(1000, "punto");

let tragamonedas1: Tragamonedas = new Tragamonedas("animales", 10);
// tragamonedas1.iniciarTragamonedas(1000);

let tragamonedasPoderoso1: TragamonedasPoderoso = new TragamonedasPoderoso("animales", 50, true);
// tragamonedasPoderoso1.iniciarTragamonedasPoderoso(1000);

let casino1: Casino = new Casino (23, "Buenos Aires", tragamonedas1, tragamonedasPoderoso1, dados1, puntoYBanca1);
/* casino1.setSucursal(99);
console.log(casino1.getSucursal());
casino1.setCiudad('Ushuaia');
console.log(casino1.getCiudad());
casino1.validacionAforo(arrayJugadores);
console.log(casino1.getAforo()); */

casino1.jugarTragamonedas(jugador001, 1000);
casino1.jugarTragamonedasPoderoso(jugador001, 1000);
casino1.jugarDados(jugador001, 1000);
casino1.jugarPuntoYBanca(jugador001, 1000, "empate");

// console.log(jugador001.billetera());

