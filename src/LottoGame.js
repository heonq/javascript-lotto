const Lotto = require('./Lotto');
const { Random } = require('@woowacourse/mission-utils');
const { CONSTANTS, LOTTO_PRIZE } = require('../utils/Constants');

class LottoGame {
  #userLotto;
  #prizeCount;

  constructor() {
    this.#userLotto = [];
    this.#prizeCount = {
      fifthPrize: 0,
      fourthPrize: 0,
      thirdPrize: 0,
      secondPrize: 0,
      firstPrize: 0,
    };
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
  handlePrize(winningNumbers) {
    this.#userLotto.forEach((lotto) => {
      const matchCount = lotto.drawWinningNumbers(winningNumbers);
      if (matchCount >= CONSTANTS.prizeMinimumCount) return;
      if (matchCount !== CONSTANTS.checkBonusCount)
        return (this.#prizeCount[LOTTO_PRIZE[matchCount]] += 1);
    });
  }
}

module.exports = LottoGame;
