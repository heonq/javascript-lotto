const { Console, Random } = require('@woowacourse/mission-utils');
const { LOTTO_MESSAGE } = require('../constants/lottoMessage');
const { LOTTO } = require('../constants/lottoValue');
const Validator = require('../lib/Validator');
const Lotto = require('./Lotto');

class User {
  #storage;

  constructor() {
    this.#storage = [];
  }

  play() {
    Console.print('HI 1');
    this.purchaseLotto();
    this.generateLotto();
    Console.print('HI IM');
    this.printLotto();
    Console.print('HI');
    this.getMainNumbers();
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
    Console.print('point');
    for (let i = 0; i < this.quantity; i++) {
      const lottoNumber = Random.pickUniqueNumbersInRange(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.NUMBER_COUNT,
      );
      const lotto = new Lotto(lottoNumber);
      this.#storage.push(lotto);
    }
  }

  printLotto() {
    Console.print(this.getLottoString());
  }

  getLottoString() {
    return this.#storage.reduce((stringConsole, eachLotto) => {
      return stringConsole + `[${eachLotto.getNumbers().join(', ')}]\n`;
    }, '');
  }

  getMainNumbers() {
    Console.readLine(LOTTO_MESSAGE.INPUT_MAIN_NUMBER, (mainNumbers) => {
      this.mainNumbers = mainNumbers.split(',').map(Number);
      Validator.validateMainNumbers(this.mainNumbers);
    });
  }
  getBonusNumber() {
    Console.readLine(LOTTO_MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      Validator.validateBonusNumber(bonusNumber);
      this.bonusNumber = Number(bonusNumber);
    });
  }
}

module.exports = User;
