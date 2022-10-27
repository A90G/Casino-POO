import { Juegos } from "./juegos";
import { Persona } from "./persona";

export class Casino {
    protected sucursal : number;
    protected ciudad: string;
    protected aforo: Persona[];
    

    constructor(pSucursal:number,pCiudad:string,pAforo:Persona[]){
        this.sucursal=pSucursal;
        this.ciudad=pCiudad;
        this.aforo= pAforo;
        
    }
    public getSucursal(): number {
        return this.sucursal;
     }
     public setSucursal(pSucursal: number):number {
        return this.sucursal = pSucursal;
     }
     public getCiudad(): string {
        return this.ciudad;
     }
     public setCiudad(pCiudad: string): string {
        return this.ciudad = pCiudad;
     }
     public validacionAforo(personas:Persona[]){
      let variable = false;
        for(let i=0;i < personas.length;i++){
        if(personas[i].mayorEdad() === true ){
         //persona en i push al arreglo
        } else {
         //poder saber qué persona es menor y que el return solicite sacarla del casino
         return "Aforo no validado";
        }
     }
}
}