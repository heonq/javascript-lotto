const { Console, Random } = require('@woowacourse/mission-utils');
const { LOTTO_MESSAGE } = require('../constants/lottoMessage');
const { LOTTO } = require('../constants/lottoValue');
const Validator = require('../lib/Validator');
const Lotto = require('./Lotto');

class User {
  constructor() {
    this.#storage = [];
  }

  play() {
    this.purchaseLotto();
    this.generateLotto();
    this.printLotto();
  }

  purchaseLotto() {
    Console.readLine(LOTTO_MESSAGE.INPUT_AMOUNT, (amount) => {
      Validator.validatePurchaseAmount(amount);
      this.amount = amount;
      this.quantity = this.amount / LOTTO.PRICE;
      Console.print(this.quantity + LOTTO_MESSAGE.PRINT_QUANTITY);
    });
  }
  generateLotto() {
    for (let i = 0; i < this.quantity; i++) {
      const lottoNumber = Random.pickUniqueNumbersInRange(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.NUMBER_COUNT,
      ).sort((a, b) => a - b);
      const lotto = new Lotto(lottoNumber);
      this.#storage.push(lotto);
    }
  }
  printLotto() {
    Console.print(getLottoString());
  }

  getLottoString() {
    this.#storage.reduce((stringConsole, lotto) => {
      let lottoString = lotto.join(',');
      return stringConsole + `[${lottoString}]\n`;
    }, '');
  }
}

module.exports = User;
