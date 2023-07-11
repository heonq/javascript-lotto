const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_MESSAGE } = require('../constants/lottoMessage');

const Input = {
  readPurchaseAmount(setAmount) {
    Console.readLine(LOTTO_MESSAGE.INPUT_AMOUNT, setAmount);
  },

  readMainNumbers(handleMainNumbers) {
    Console.readLine(LOTTO_MESSAGE.INPUT_MAIN_NUMBER, handleMainNumbers);
  },
  readBonusNumbers(handleBonusNumber) {
    Console.readLine(LOTTO_MESSAGE.INPUT_BONUS_NUMBER, handleBonusNumber);
  },
};

module.exports = Input;
