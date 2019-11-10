'use strict';

const logItems = function(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const elementNumber = `[${i + 1}] - [${arr[i]}]`;

    console.log(elementNumber);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
