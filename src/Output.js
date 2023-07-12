const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_MESSAGE } = require('../constants/lottoMessage');

const Output = {
  printPurchasedQuantity(quantity) {
    Console.print(quantity + LOTTO_MESSAGE.PRINT_QUANTITY);
  },

  printResult(user) {
    Console.print(LOTTO_MESSAGE.PRINT_RESULT);
    Object.entries(user.getPrizeCounter()).forEach(([prize, counter]) => {
      Console.print(LOTTO_MESSAGE[prize] + counter + LOTTO_MESSAGE.QUANTITY);
    });
  },

  printEarningRate(earningRate) {
    Console.print(LOTTO_MESSAGE.RATE_OF_RETURN + earningRate + LOTTO_MESSAGE.IS);
  },
};

module.exports = Output;
