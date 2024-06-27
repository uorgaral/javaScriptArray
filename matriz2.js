const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];
console.log("A primeira matriz é: " + numbers);

numbers.push([4, 5, 6]);
console.log("A segunda matriz é: " + numbers);

numbers.unshift([1, 2, 3]);
console.log(numbers);

console.log(numbers.pop());
console.log(numbers.shift());
