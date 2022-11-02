import { Persona } from "./persona";

export class Jugador extends Persona {
  protected dineroInicial: number;
  protected billetera: number;
  protected apalancamiento: number;
  protected categoria: string;

  constructor (pNombre: string, pApellido: string, pEdad: number, pDineroInicial: number) {
    super (pNombre, pApellido, pEdad);
    this.dineroInicial = pDineroInicial;
    this.billetera = pDineroInicial;
    this.apalancamiento = 1;
    this.categoria = "Jugador Comun";
  }

  public getDineroInicial(): number {
    return this.dineroInicial;
  }

  public setDineroInicial(dineroInicial: number) {
    this.dineroInicial = dineroInicial;
  }

  public getBilletera(): number {
    return this.billetera;
  }

  public setBilletera(dinero: number) {
    this.billetera = dinero;
  }

  public gananciaDelDia(): number {
    let ganancia: number = (this.getBilletera() - this.dineroInicial);
    console.log(`El resultado del dia del jugador es: $${ganancia}`);
    return ganancia;
  }
  
  public porcentajeOperGanadoras(): number {
    let porcentaje = (this.gananciaDelDia() * 100) / this.dineroInicial;
    console.log(`El jugador tiene un porcentaje de operaciones ganadores de ${porcentaje}%`);
    return porcentaje;
  }
  
  public cambioCategoria(): void {
    if (this.dineroInicial >= 100000 && this.porcentajeOperGanadoras() >= 45) {
      this.categoria = "Jugador VIP";
      this.setBilletera(this.dineroInicial * 0.2 + this.getBilletera());
      console.log(`Felicitaciones! usted es un "Jugador VIP", le regalamos ${this.dineroInicial * 0.2}`)
    } else {
      this.categoria = "Jugador Comun";
    }
    console.log(`El jugador tiene la siguiente categoría: ${this.getCategoria()}`);
  }
  
  public getCategoria(): string {
    return this.categoria;
  }

/*   public apalancamientoAprobado(): void {
    if (this.categoria == "Jugador VIP") {
      this.apalancamiento = 2;
    } else if (this.porcentajeOperGanadoras() >= 60 && this.apalancamiento == 2) {
      this.apalancamiento = 3;
    }
    console.log(`El jugador tiene el siguiente apalancamiento aprobado: ${this.apalancamiento}`);
  } */

/*   public getApalancamiento(): number {
    return this.apalancamiento;
  } */
}