const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../../utils/Message');

const InputView = {
  readPurchase(handlePurchase) {
    Console.readLine(MESSAGE.askPurchase, handlePurchase);
  },
  readWinningNumbers(handleWinningNumbers) {
    Console.readLine(MESSAGE.askWinningNumbers, handleWinningNumbers);
  },
};

module.exports = InputView;
