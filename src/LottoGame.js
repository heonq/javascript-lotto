const Lotto = require('./Lotto');
const { Random } = require('@woowacourse/mission-utils');
const { CONSTANTS, LOTTO_PRIZE, PRIZE_AMOUNT } = require('../utils/Constants');
const MESSAGE = require('../utils/Message');

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
      .fill(' ')
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
    return this.#userLotto.map((lotto) => `[${lotto.getNumbers().join(', ')}]`).join('\n');
  }
  handlePrize(winningNumbers, bonusNumber) {
    this.#userLotto.forEach((lotto) => {
      const matchCount = lotto.drawWinningNumbers(winningNumbers);
      if (matchCount < CONSTANTS.prizeMinimumCount) return;
      if (matchCount !== CONSTANTS.checkBonusCount)
        return (this.#prizeCount[LOTTO_PRIZE[matchCount]] += 1);
      this.handleBonus(lotto, bonusNumber);
    });
  }
  handleBonus(lotto, bonusNumber) {
    if (lotto.drawBonusNumber(bonusNumber)) return (this.#prizeCount.secondPrize += 1);
    this.#prizeCount.thirdPrize += 1;
  }

  getStatistics() {
    return `${this.getResult()}\n${this.getEarningRate()}`;
  }

  getResult() {
    return Object.entries(this.#prizeCount)
      .map(([prize, count]) => MESSAGE[prize] + count + MESSAGE.quantity)
      .join('\n');
  }
  getEarningAmount() {
    return Object.entries(this.#prizeCount).reduce(
      (acc, [prize, count]) => PRIZE_AMOUNT[prize] * count + acc,
      0,
    );
  }
  getEarningRate() {
    const earningRate =
      (this.getEarningAmount() / (this.#userLotto.length * CONSTANTS.lottoPrice)) *
      (100).toFixed(1);
    return MESSAGE.earningRate + earningRate + MESSAGE.is;
  }
}

module.exports = LottoGame;
