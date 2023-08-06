const Lotto = require('./Lotto');
const { Random } = require('@woowacourse/mission-utils');
const CONSTANTS = require('../utils/Constants');

class LottoGame {
  #userLotto;

  constructor() {
    this.#userLotto = [];
  }

  generateLotto(amount) {
    const numbers = Array(amount / CONSTANTS.lottoPrice)
      .fill('')
      .map(() => {
        return Random.pickUniqueNumbersInRange(
          CONSTANTS.minNumber,
          CONSTANTS.maxNumber,
          CONSTANTS.validLength,
        );
      });
    this.#userLotto = numbers.map((number) => new Lotto(number));
  }
  getNumbersString() {
    return this.#userLotto.map((lotto) => `[${lotto.getNumbers().join(',')}]`).join('\n');
  }
}

module.exports = LottoGame;
