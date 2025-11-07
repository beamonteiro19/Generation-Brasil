import { Terrestre } from "./Terrestre";

export function main() {
  const bike: Terrestre = new Terrestre(2, 2, 20);
  console.log(
    `A capacidade da bike é de: ${bike.capacidade} e a velocidade é de ${bike.velocidade}`
  );

  bike.visualizar()

}
main();
