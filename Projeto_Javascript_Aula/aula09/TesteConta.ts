import { Conta } from "./Conta"


export function main(){
    const conta1: Conta = new Conta(2855, 19423, 9, "Beatriz Monteiro",10000000)
    conta1.saldo = 150
    console.log(`Titular da Conta: ${conta1.titular}\nSaldo:${conta1.saldo}`)

    
}

main()