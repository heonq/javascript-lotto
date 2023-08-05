const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printMessage(message) {
    Console.print(`${message}\n`.trim());
  },
};

module.exports = OutputView;
