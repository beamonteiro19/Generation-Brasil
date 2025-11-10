import { Nadador } from "./Nadador"
import { Atleta } from "./Atleta"
import { Ciclista } from "./Ciclista"

export function main(){
    const nadador:  Nadador = new Nadador("Davi")
    const ciclista:  Ciclista = new Ciclista("Andrew")

    nadador.aquecer()
    nadador.nadar()
    nadador.visualizar()

    ciclista.aquecer()
    ciclista.pedalar()
    ciclista.visualizar()
  
}


main()