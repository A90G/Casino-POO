import { Tragamonedas } from "./tragamonedas";

export class TragamonedasPoderoso extends Tragamonedas {
  protected diaDeSuerte: boolean;

  constructor (pTematica: string, pApuestaMinima: number, pDiaDeSuerte: boolean) {
    super (pTematica, pApuestaMinima);
    this.diaDeSuerte = pDiaDeSuerte;
  }
  
  public getDiaDeSuerte() {
    return this.diaDeSuerte;
  }

  public setDiaDeSuerte(pDiaDeSuerte: boolean) {
    this.diaDeSuerte = pDiaDeSuerte;
  }

  public jugarTragamonedasPoderoso(apuesta: number): number {
    let lugar1: number = Math.floor(Math.random() * 2) + 1;
    let lugar2: number = Math.floor(Math.random() * 2) + 1;
    let lugar3: number = Math.floor(Math.random() * 2) + 1;
    let combinacion = `${lugar1} ${lugar2} ${lugar3}`;

    if ((lugar1 === lugar2 && lugar2 === lugar3) && (apuesta >= this.apuestaMinima) && (this.diaDeSuerte === true)) {
      console.log(`La combinación es ${combinacion}. El usuario ha ganado su apuesta: $${apuesta * 5}`);
      return apuesta * 5;
    } else if ((lugar1 === lugar2 && lugar2 === lugar3) && (apuesta >= this.apuestaMinima)) {
      console.log(`La combinación es ${combinacion}. El usuario ha ganado su apuesta: $${apuesta * 2}`);
      return apuesta * 2;
    } else if (apuesta >= this.apuestaMinima) {
      console.log(`El resultado es ${combinacion}. El usuario ha perdido su apuesta: $${0}`);
      return 0;
    } else {
      console.log(`Su apuesta es menor a la apuesta minima ($${this.apuestaMinima})`);
      return 0;
    }
  }
}

/* let tragamonedasPod1 = new TragamonedasPoderoso('animales', 10, true);
tragamonedasPod1.jugarTragamonedasPoderoso(1000); */
