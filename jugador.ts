import { Persona } from "./persona";

export class Jugador extends Persona {
    private dinero: number;
        
    constructor(pNombre: string, pApellido: string, pEdad: number, pDinero: number) {
    super (pNombre, pApellido, pEdad);
    this.dinero = pDinero;
    }
public porcentajeOperGanadoras(): number{
    let porcentaje = (this.dinero * 100) / this.creditoInicial();
    return porcentaje;
}
public subirCategoria(): number{
    if(this.dinero >= 1000000 && this.porcentajeOperGanadoras() >= 45){
    return 1;    
}else{
    return 0;    
}
}
public creditoInicial(pDinero: number): void{
    this.dinero = pDinero;
    console.log(`El jugador ${this.nombre} tiene ${this.dinero} de credito inicial`);
}
}