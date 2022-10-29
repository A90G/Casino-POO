import { Persona } from "./persona";

export class Jugador extends Persona {

 private dineroInicial: number;
 private dineroFinal: number;
 private apalancamiento: number;
 private categoria: string;    

constructor(pNombre: string, pApellido: string, pEdad: number, pDineroInicial: number) {
    super (pNombre, pApellido, pEdad);
    this.dineroInicial = pDineroInicial;
    this.apalancamiento = 1;
    this.dineroFinal = 0;
    this.categoria = "Jugador Común";
}

  public getDineroInicial(): number { 
    return this.dineroInicial;
   }
  public setDineroInicial(pDineroInicial: number): number { 
   return this.dineroInicial = pDineroInicial;
  }
  public getDineroFinal(): number { 
   return this.dineroFinal;
  }
  public getApalancamiento(): number {
   return this.apalancamiento;
  }
  public apalancamientoAprobado(): void {
    if (this.dineroInicial >= 50000 && this.porcentajeOperGanadoras() >= 30 && this.apalancamiento === 1) {
     this.apalancamiento = 2;
    } else if (this.dineroInicial >= 100000 && this.porcentajeOperGanadoras() >= 60 && this.apalancamiento === 2) {
     this.apalancamiento = 3;
    } else {
        this.apalancamiento = 4;
    }
    console.log(`El jugador tiene el siguiente apalancamiento aprobado: ${this.categoria}`);
  }
  public getCategoria(): string {
   return this.categoria;
  }
  public porcentajeOperGanadoras(): number {
   let porcentaje = (this.dineroInicial * 100) / this.dineroFinal;
   return porcentaje;
  }
  public creditoInicial(): number {
   let credito = this.dineroInicial * this.apalancamiento;
   return credito;
   }
  public cambioCategoria(): void {
    if (this.dineroInicial >= 1000000 && this.porcentajeOperGanadoras() >= 45 && this.categoria === "Jugador Común") {
     this.categoria = "Jugador VIP";
    } else {
     this.categoria = "Jugador Común";
    }
    console.log(`El jugador tiene la siguiente nueva categoría: ${this.categoria}`);
  }
  /*public setDineroFinal(): number {
    return this.dineroFinal = this.dineroFinal + resultados apuestas ??;
  }*/
  public cuentaCorriente(): void {
    let creditoCuenta = this.creditoInicial() // + - resultados apuestas ??;
    console.log(`El jugador ${this.nombre} tiene ${creditoCuenta} de credito en cuenta`);
  }
}