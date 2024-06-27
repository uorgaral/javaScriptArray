const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

let resultado = 1;

for (let linha = 0; linha < numbers.length; linha++) {
  for (let coluna = 0; coluna < numbers[linha].length; coluna++) {
    resultado = numbers[linha][coluna] * resultado;

    console.log(resultado);
  }
}
