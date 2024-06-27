const numbers = [
  [10, 20, 30],
  [10, 20, 30],
];

for (let coluna = 0; coluna < numbers[0].length; coluna++) {
  let resultado = 1;

  for (let linha = 0; linha < numbers.length; linha++) {
    resultado = resultado * numbers[linha][coluna];
  }
  console.log(resultado);
}
