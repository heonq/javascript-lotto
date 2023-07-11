const { PRIZE_AMOUNT } = require('../constants/lottoValue');
const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_MESSAGE } = require('../constants/lottoMessage');

class Accounting {
  printEarningRate(amount, prizeCounter) {
    const earningAmount = this.calcEarningAmount(prizeCounter);
    const earningRate = ((earningAmount / amount) * 100).toFixed(1);
    Console.print(LOTTO_MESSAGE.RATE_OF_RETURN + earningRate + LOTTO_MESSAGE.IS);
  }

  calcEarningAmount(prizeCounter) {
    return Object.entries(prizeCounter).reduce((sumPrize, [prize, counter]) => {
      let result = PRIZE_AMOUNT[prize] * counter;
      return sumPrize + result;
    }, 0);
  }
}

module.exports = Accounting;
