'use strict';
let input;
const numbers = [];
let total = 0;
input = prompt('Напишите любое число:');

while (input !== null && input !== NaN) {
  while (isNaN(input)) {
    alert('Введено не число! Попоробуйте ещё');
    input = 0;
  }
  input = Number.parseFloat(input);
  numbers.push(input);
  console.log(numbers);
  input = prompt('Напишите любое число:');
}
for (input of numbers) {
  total = total + input;
  console.log(total);
}
alert(`Сумма = ${total}`);
