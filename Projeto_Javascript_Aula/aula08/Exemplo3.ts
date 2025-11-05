function tranformarNumeroEmExtenso(valor: number): string {
    let texto: string;

    if (valor === 5) {
        texto = "Valor digitado é cinco";
    } else {
        texto = "Você digitou um número diferente de cinco";
    }

    return texto;
}

let numeroEmTexto: string = tranformarNumeroEmExtenso(5);
console.log(numeroEmTexto);