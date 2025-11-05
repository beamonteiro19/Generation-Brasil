

            // | ou operador OU , mas é usado para declarar tipagens. nesse caso podem ser dois
            // função do tipo void NÃO TEM retorno
function logar(usuario: number | string): void{ 
// typeof identifica e verifica a tipagem da função usuario retorna a tipagem d uma variavel
    if (typeof(usuario) === "number" ) 
        console.log("\nVoce esta acessando seu Instagram pelo celular");
    else
        console.log("\nVoce esta acessando seu Instagram por email");
}



logar("1123")

// = atribuição (a é igual a 5)
// == igualdade  (5 é igual a 5)
// === identico (5 é igual e ele tem o mesmo tipo?)

// - Se você escrevesse sem aspas (typeof usuario === number), 
// o JavaScript pensaria que number é uma variável 
// e daria erro se ela não estiver definido

