import { Casino } from "./casino";
import { Dados } from "./dados";
import { Jugador } from "./jugador";
import { Persona } from "./persona";
import { PuntoYBanca } from "./puntoBanca";
import { Ruleta } from "./ruleta";
import { Tragamonedas_Poderoso } from "./tragamonedas_poderoso";
import { Tragamonedas } from "./tragamonedas";

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

let arreglo_Jugadores: Persona[] =  [jugador001, jugador002, jugador003, jugador004, jugador005, jugador006, jugador007, jugador008, jugador009, jugador010];

let casinoROYALE: Casino = new Casino (23, "Buenos Aires", arreglo_Jugadores);


