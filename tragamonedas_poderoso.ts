import { Tragamonedas } from "./tragamonedas";

export class Tragamonedas_Poderoso extends Tragamonedas {
  protected diaDeSuerte: number;

  constructor(pTematica: string, pApuestaMinima:number,pProbabilidadGanar:number,pDiaDeSuerte:number){
    super(pTematica,pApuestaMinima,pProbabilidadGanar)
    this.diaDeSuerte= pDiaDeSuerte;
 }
  public setDiaDeSuerte(pDiaDeSuerte:number){
    return this.jugarTragamonedas;
}
}

let Tragamonedas1=new Tragamonedas_Poderoso ('animales',2,1,10);
Tragamonedas1.setDiaDeSuerte(5);
