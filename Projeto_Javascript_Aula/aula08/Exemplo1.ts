// // Exemplo de método

// import { Stack } from "../aula07/Stack";

// const pilha =  new Stack<string>();
// // temos que ter um arquivo de suporte (Stack), 

// pilha.push("")  // são métodos, porque estao totalmente vinculados à nossa pilha, lou variavel


// // sem a inicialização de uma variavel eu nao consigo vincular o metedo à função



// declaração da função
// inicialização da função
export function somar(a: number, b: number ): number{
    
    let resultado: number = a + b

    return resultado //depois de fazer o preocessamento vai retornar um dado, nese caso um valor numerico
    // função somar retorna resultado, que é tipo primititvo number
}


let valor: number = somar(5,7)
console.log("O resultado da sua função somar é de: ",valor)
