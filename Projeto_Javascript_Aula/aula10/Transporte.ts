export class Transporte{

    // Atritubo

    private _capacidade: number

    // Metodo construtor

    constructor(capacidade: number){
        this._capacidade =  capacidade
    }
    // Metodos de acesso get e set

    public get capacidade(){

        return this._capacidade
    }

    public set capacidade(novaCapacidade: number){
       this._capacidade = novaCapacidade
    }

    // Métodos de suporte auxiliares
    public visualizar(): void {
		
		console.log("\n\n************************************************************");
		console.log("Dados do Meio de Transporte:");
		console.log("****************************************************************");
		console.log("Capacidade (número de passageiros): " + this._capacidade);
	}
}

