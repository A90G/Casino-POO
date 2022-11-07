import { Persona } from "./persona";

export class Jugador extends Persona {
  protected dineroInicial: number;
  protected billetera: number;
  protected categoria: string;

  constructor (pNombre: string, pApellido: string, pEdad: number, pDineroInicial: number) {
    super (pNombre, pApellido, pEdad);
    this.dineroInicial = pDineroInicial;
    this.billetera = pDineroInicial;
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
    if (this.dineroInicial >= 1000000 && this.porcentajeOperGanadoras() >= 45) {
      this.categoria = "Jugador VIP";
      this.setBilletera(this.getBilletera() + 20000);
    } else {
      this.categoria = "Jugador Comun";
    }
    console.log(`El jugador tiene la siguiente nueva categoría: ${this.categoria}`);
  }

  public getCategoria(): string {
    return this.categoria;
  }
}