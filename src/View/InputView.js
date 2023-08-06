const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../../utils/Message');

const InputView = {
  readPurchase(handlePurchase) {
    Console.readLine(MESSAGE.askPurchase, handlePurchase);
  },
  readWinningNumbers(handleWinningNumbers) {
    Console.readLine(MESSAGE.askWinningNumbers, handleWinningNumbers);
  },
  readBonusNumber(handleBonusNumber) {
    Console.readLine(MESSAGE.askBonusNumber, handleBonusNumber);
  },
};

module.exports = InputView;
