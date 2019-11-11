'use strict';

const countTotalSalary = function(employees) {
  const salaryArray = Object.values(employees);
  let total = 0;
  for (const key of salaryArray) {
    total += Number(key);
  }
  return total;
};

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
