import { Atleta } from "./Atleta";

export class Ciclista extends Atleta{
    constructor(nome: string){
        super(nome)
    }

    public aquecer(): void {
        console.log("Fazendo Spinning e Alongamento")
    }

    public pedalar(): void{
        console.log("Estou pedalando!")


    }
    
}