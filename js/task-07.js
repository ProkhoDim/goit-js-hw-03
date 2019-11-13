'use strict';

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],
  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  unicId: 0,
  deposit(amount) {
    if (typeof amount === 'number') {
      this.unicId = this.unicId + 1;
      const depositTransactionObject = { id: this.unicId, type: Transaction.DEPOSIT, amount };
      this.balance += amount;
      this.addTransaction(depositTransactionObject);
      return depositTransactionObject;
    } else {
      return console.log('введено не число!');
    }
  },

  //   new Date().valueOf();

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (typeof amount === 'number') {
      this.unicId = this.unicId + 1;
      const withdrawTransactionObject = {
        id: this.unicId,
        type: Transaction.WITHDRAW,
        amount,
      };
      if (this.balance < amount) {
        return console.log(
          `Недостаточно средств! Вы хотите снять ${amount}, текущий баланс: ${this.balance}`,
        );
      } else {
        this.balance -= amount;
        this.addTransaction(withdrawTransactionObject);
        return withdrawTransactionObject;
      }
    } else {
      return console.log('введено не число!');
    }
  },

  /*
   * Метод добавляющий транзакцию в свойство transactions
   * Принимает объект транзакции
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log(`Текущий баланс: ${this.balance}`);
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзакции по id
   */
  getTransactionDetails(id) {
    for (const obj of this.transactions) {
      if (obj.id === id) {
        console.log(obj);
        return obj;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const obj of this.transactions) {
      if (obj.type === type) {
        total += obj.amount;
      }
    }
    console.log(total);
    return total;
  },
};

account.deposit(500);
account.deposit(200);
account.withdraw(600);
account.withdraw('asda');
account.deposit(300);
account.deposit(10);
account.withdraw(600);
account.deposit('gfgsd');
account.withdraw(500);
account.withdraw(100);
account.getBalance();
account.getTransactionDetails(3);
account.getTransactionTotal('deposit');
console.log(account);
