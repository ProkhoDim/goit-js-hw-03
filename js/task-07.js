'use strict';
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
console.log(logins);
let login = prompt();
const isLoginValid = function(login) {
  if (login === null || login === NaN) {
    login = 0;
  }
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};
console.log(isLoginValid(login));
const isLoginUnique = function(logins, login) {
  for (const item of logins) {
    if (item === login) {
      return false;
    }
  }
  return true;
};
console.log(isLoginUnique(logins, login));
const addLogin = function(Logins, login) {
  if (isLoginValid(login) && isLoginUnique(logins, login)) {
    console.log('Логин успешно добавлен!');
  }

  if (isLoginValid(login) && !isLoginUnique(logins, login)) {
    console.log('Такой логин уже используется!');
  }

  if (!isLoginValid(login) && isLoginUnique(logins, login)) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  }
};
addLogin(logins, login);
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
