import { Stack } from "./Stack";
import * as readlineSync from "readline-sync";

const pilhaLivros = new Stack<string>();
let opcao: number;

do {
  console.log("\n######################################################");
  console.log("1 - Adicionar Livro na pilha");
  console.log("2 - Listar todos os Livros");
  console.log("3 - Retirar Livro da pilha");
  console.log("0 - Sair");
  console.log("######################################################");

  opcao = Number(readlineSync.question("Entre com a opção desejada: "));

  switch (opcao) {
    case 1:
      const nomeLivro = readlineSync.question("Digite o nome: ");
      pilhaLivros.push(nomeLivro);
      console.log("\nPilha:\n");
      pilhaLivros.printStack();
      console.log("\nLivro adicionado!");
      break;

    case 2:
      console.log("\nLista de Livros na Pilha:\n");
      pilhaLivros.printStack();
      break;

    case 3:
      const retirado = pilhaLivros.pop();
      if (retirado) {
        console.log("\nPilha:\n");
        pilhaLivros.printStack();
        console.log("\nUm Livro foi retirado da pilha!");
      }
      break;

    case 0:
      console.log("\nPrograma Finalizado!");
      break;

    default:
      console.log("\nOpção inválida. Tente novamente.\n");
      break;
  }

} while (opcao !== 0);
