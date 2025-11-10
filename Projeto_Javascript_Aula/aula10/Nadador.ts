import { Atleta } from "./Atleta";


export class  Nadador extends Atleta{
    constructor(nome: string){
        super(nome)
    }
      public aquecer(): void{
            console.log("Estou fazendo polichinelo!")
        }

      public nadar(): void{
        console.log("Estou nadando")
    }
}