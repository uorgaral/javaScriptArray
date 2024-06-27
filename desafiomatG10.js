const arr = [
  [12, -8, 15, 6],
  [1, 6, 20, -9],
  [0, -4, 0, -8],
  [-1, 6, 0, 15],
];

let multiplicação = 1;

for (let linha = 0; linha < arr.length; linha++) {
  let coluna = linha;

  multiplicação = arr[linha][coluna] * multiplicação;
  arr.length - 1 - linha;

  console.log(arr.length - 1 - linha);
}
