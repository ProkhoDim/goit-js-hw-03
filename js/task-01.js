'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';

user.hobby = 'javascript';

user.premium = false;

const keysUser = Object.keys(user);

for (const key of keysUser) {
  console.log(`${key}: ${user[key]}`);
}
console.log(user);
