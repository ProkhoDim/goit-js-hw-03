'use strict';
const formatString = function(string) {
  const stringArray = string.split('');
  const stringArrayLength = stringArray.length;
  if (stringArrayLength < 40) {
    return string;
  }
  const modifiedStringArray = stringArray.slice(0, 40);
  const modifiedString = `${modifiedStringArray.join('') + '...'} `;

  return modifiedString;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
