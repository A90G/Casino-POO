import { Casino } from './casino';
import { Persona } from './persona';

export class Tragamonedas{
  protected tematica: string;
  protected apuestaMinima: number;
  protected probabilidadGanar: number;
 
  constructor(pTematica: string, pApuestaMinima:number,pProbabilidadGanar:number,){
    this.tematica=pTematica;
    this.apuestaMinima=pApuestaMinima;
    this.probabilidadGanar=pProbabilidadGanar;
  }
  public setTematica(pTematica:string):void{
    this.tematica=pTematica;
  }
  public getApuestaMinima():number{
    return this.apuestaMinima;
  }
  public setApuestaMinima(pApuestaMinima:number){
    this.apuestaMinima=pApuestaMinima;
  }
  public jugarTragamonedas(apuesta:number){
      let lugar1: number = Math.floor(Math.random() * 2) + 1;
      let lugar2: number = Math.floor(Math.random() * 2) + 1;
      let lugar3: number = Math.floor(Math.random() * 2) + 1;
      let combinacion= `${lugar1}${lugar2}${lugar3}`;
      
      if (lugar1 === lugar2 && lugar2 ===lugar3) {
          console.log(`La combinación es ${combinacion}. El usuario ha ganado su apuesta: $${apuesta * 2}`);
          return apuesta * 2;
      } else {
          console.log(`El resultado es ${combinacion}. El usuario ha perdido su apuesta: $${0}`);
          return 0;
      } 
  }
}
let Tragamonedas1=new Tragamonedas ('animales',10,1)
Tragamonedas1.jugarTragamonedas(100);