'use strict';

let unicId = 0;
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

  deposit(amount) {
    unicId = unicId + 1;
    const depositTransactionObject = { id: unicId, type: 'deposit', amount: amount };
    this.balance += amount;
    this.addTransaction(depositTransactionObject);
    return depositTransactionObject;
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
    unicId = unicId + 1;
    const withdrawTransactionObject = { id: unicId, type: 'withdraw', amount: amount };
    if (this.balance < amount) {
      console.log(
        `Недостаточно средств для снятия денег! Вы хотите снять ${amount}, текущий баланс: ${this.balance}`,
      );
    } else {
      this.balance -= amount;
      this.addTransaction(withdrawTransactionObject);
      return withdrawTransactionObject;
    }
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект транзакции
   */
  addTransaction(transaction) {
    this['transactions'].push(transaction);
    // console.log(this.transactions);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log(`Текущий баланс: ${this.balance}`);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    const transactionArray = this.transactions;
    // console.log(transactionArray);
    for (const obj of transactionArray) {
      if (obj.id === id) {
        console.log(obj);
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    const transactionArray = this.transactions;
    // console.log(transactionArray);
    for (const obj of transactionArray) {
      if (obj.type === type) {
        console.log(obj);
      }
    }
  },
};

account.deposit(500);
account.deposit(200);
account.withdraw(600);
account.deposit(300);
account.deposit(10);
account.withdraw(600);
account.withdraw(500);
account.withdraw(100);
account.getBalance();
account.getTransactionDetails(3);
account.getTransactionTotal('deposit');
console.log(account);
