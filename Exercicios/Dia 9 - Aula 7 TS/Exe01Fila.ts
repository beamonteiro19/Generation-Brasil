import { Queue } from './Queue';
import * as readlineSync from 'readline-sync';

const filaClientes = new Queue<string>();

let opcao: number;


do {
   console.log("############################################");
   console.log("1 - Adicionar Cliente na Fila");
   console.log("2 - Listar todos os Clientes");
   console.log("3 - Retirar Cliente da Fila");
   console.log("0 - Sair");
   console.log("############################################");

   opcao = Number(readlineSync.question("Escolha e digite uma opcao: "));

      switch (opcao) {
         case 1:
            const nome = readlineSync.question("Digite o nome: ");
            filaClientes.enqueue(nome);
            filaClientes.printQueue();
            console.log("Cliente Adicionado!\n");
            break;

         case 2:
            console.log("\nLista de Clientes na Fila:");
            filaClientes.printQueue();
            break;

         case 3:
            const chamado = filaClientes.dequeue();
            if (chamado) {
               filaClientes.printQueue();
               console.log("O Cliente foi Chamado!\n");
            }
            break;

         case 0:
            console.log("\nPrograma Finalizado!\n");
            break;

         default:
            console.log("\nOpção inválida. Tente novamente.\n");
            break;
      }

   } while (opcao !== 0);