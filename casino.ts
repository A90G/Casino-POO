import { Jugador } from "./jugador";

export class Casino {
   protected sucursal: number;
   protected ciudad: string;
   protected aforo: Jugador[];

   constructor (pSucursal: number, pCiudad: string) {
      this.sucursal = pSucursal;
      this.ciudad = pCiudad;
      this.aforo = [];
   }
   
   public getSucursal(): number {
      return this.sucursal;
   }
   
   public setSucursal (pSucursal: number):number {
      return this.sucursal = pSucursal;
   }
   
   public getCiudad(): string {
      return this.ciudad;
   }
   
   public setCiudad(pCiudad: string): string {
      return this.ciudad = pCiudad;
   }
   
   public validacionAforo (jugadores: Jugador[]) {
      for (let i = 0; i < jugadores.length; i++) {
         if (jugadores[i].esMayorEdad() === true) {
            jugadores.splice(i, 1);
            console.log(`El jugador ${jugadores[i].getNombre()} ${jugadores[i].getApellido()} ha sido retirado del casino ya que tiene ${jugadores[i].getEdad()} años`);
         }
      }
      return jugadores;
   }
}

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

let arreglo_Jugadores: Jugador[] =  [jugador001, jugador002, jugador003, jugador004, jugador005, jugador006, jugador007, jugador008, jugador009, jugador010];

let casinoROYALE: Casino = new Casino (23, "Buenos Aires");

casinoROYALE.validacionAforo(arreglo_Jugadores);

/* public cuentaCorriente(): void {
   let creditoCuenta = this.dineroFinal - this.creditoInicial();
   console.log(`El jugador ${this.nombre} tiene ${creditoCuenta} de credito en cuenta`);
} */