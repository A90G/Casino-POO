export class Tragamonedas {
  protected tematica: string;
  protected apuestaMinima: number;

  constructor (pTematica: string, pApuestaMinima: number){
    this.tematica = pTematica;
    this.apuestaMinima = pApuestaMinima;
  }

  public getTematica(): string {
    return this.tematica;
  }

  public setTematica (pTematica: string): void {
    this.tematica = pTematica;
  }

  public getApuestaMinima(): number {
    return this.apuestaMinima;
  }

  public setApuestaMinima (pApuestaMinima: number) {
    this.apuestaMinima = pApuestaMinima;
  }

  public iniciarTragamonedas(apuesta: number): number {
    let lugar1: number = Math.floor(Math.random() * 2) + 1;
    let lugar2: number = Math.floor(Math.random() * 2) + 1;
    let lugar3: number = Math.floor(Math.random() * 2) + 1;
    let combinacion = `${lugar1} ${lugar2} ${lugar3}`;

    if ((lugar1 === lugar2 && lugar2 === lugar3) && (apuesta >= this.apuestaMinima)) {
      console.log(`La combinación es ${combinacion}. El jugador ha ganado su apuesta: $${apuesta * 2}`);
      return apuesta * 2;
    } else if (apuesta >= this.apuestaMinima) {
      console.log(`La combinación es ${combinacion}. El jugador ha perdido su apuesta: $${-apuesta}`);
      return -apuesta;
    } else {
      console.log(`Su apuesta es menor a la apuesta minima ($${this.apuestaMinima})`);
      return 0;
    }
  }
}