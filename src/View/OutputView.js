const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../../utils/Message');
const { CONSTANTS } = require('../../utils/Constants');

const OutputView = {
  printMessage(message) {
    Console.print(`${message}\n`.trim());
  },
  printPurchase(amount) {
    this.printMessage(amount);
    this.printMessage(amount / CONSTANTS.lottoPrice + MESSAGE.printPurchase);
  },
  printLotto(lottoGame) {
    this.printMessage(lottoGame.getNumbersString());
  },
  printResult(lottoGame) {
    this.printMessage(MESSAGE.winningResult);
    this.printMessage(lottoGame.getResult());
    this.printMessage(lottoGame.getEarningRate());
    Console.close();
  },
};

module.exports = OutputView;
