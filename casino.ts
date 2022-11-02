import { Jugador } from "./jugador";
import { Tragamonedas } from "./tragamonedas";
import { TragamonedasPoderoso } from "./tragamonedasPoderoso";
import { Dados } from "./dados";
import { PuntoYBanca } from "./puntoBanca";

export class Casino {
   protected sucursal: number;
   protected ciudad: string;
   protected aforo: Jugador[];
   protected tragamonedas: Tragamonedas;
   protected tragamonedasPoderoso: TragamonedasPoderoso;
   protected dados: Dados;
   protected puntoBanca: PuntoYBanca;

   constructor (pSucursal: number, pCiudad: string, ptragamonedas: Tragamonedas, ptragamonedasPod: TragamonedasPoderoso, pDados: Dados, pPuntoBanca: PuntoYBanca) {
      this.sucursal = pSucursal;
      this.ciudad = pCiudad;
      this.aforo = [];
      this.tragamonedas = ptragamonedas;
      this.tragamonedasPoderoso = ptragamonedasPod;
      this.dados = pDados;
      this.puntoBanca = pPuntoBanca;
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

   public jugarTragamonedas(jugador: Jugador, apuesta: number): void {
      let resultado = this.tragamonedas.iniciarTragamonedas(apuesta);
      if (jugador.getEdad() >= 18) {
         jugador.setBilletera(resultado + jugador.getBilletera());
      } else {
         console.log(`El jugador ${jugador.getNombre()} ${jugador.getApellido()} es menor de edad, por lo que no puede jugar en el casino`);
      }
   }

   public jugarTragamonedasPoderoso(jugador: Jugador, apuesta: number): void {
      let resultado = this.tragamonedasPoderoso.iniciarTragamonedasPoderoso(apuesta);
      if (jugador.getEdad() >= 18) {
         jugador.setBilletera(resultado + jugador.getBilletera());
      } else {
         console.log(`El jugador ${jugador.getNombre()} ${jugador.getApellido()} es menor de edad, por lo que no puede jugar en el casino`);
      }
   }

   public jugarDados(jugador: Jugador, apuesta: number): void {
      let resultado = this.dados.iniciarDados(apuesta);
      if (jugador.getEdad() >= 18) {
         jugador.setBilletera(resultado + jugador.getBilletera());
      } else {
         console.log(`El jugador ${jugador.getNombre()} ${jugador.getApellido()} es menor de edad, por lo que no puede jugar en el casino`);
      }
   }

   public jugarPuntoYBanca(jugador: Jugador, apuesta: number, apuestaQuien: string): void {
      let resultado = this.puntoBanca.iniciarPuntoyBanca(apuesta, apuestaQuien);
      if (jugador.getEdad() >= 18) {
         jugador.setBilletera(resultado + jugador.getBilletera());
      } else {
         console.log(`El jugador ${jugador.getNombre()} ${jugador.getApellido()} es menor de edad, por lo que no puede jugar en el casino`);
      }
   }
}