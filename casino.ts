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

   public getAforo(): Jugador[] {
      return this.aforo;
   }
   
   public validacionAforo (jugadores: Jugador[]) {
      for (let i = 0; i < jugadores.length; i++) {
         if (jugadores[i].esMayorEdad() === true) {
            this.aforo.push(jugadores[i])
            console.log(`El jugador ${jugadores[i].getNombre()} ${jugadores[i].getApellido()} ha ingresado en el casino ya que tiene ${jugadores[i].getEdad()} años`);
         }
      }
      return this.aforo;
   }
}

/* public cuentaCorriente(): void {
   let creditoCuenta = this.dineroFinal - this.creditoInicial();
   console.log(`El jugador ${this.nombre} tiene ${creditoCuenta} de credito en cuenta`);
} */