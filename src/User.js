const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_MESSAGE } = require('../constants/lottoMessage');
const Validator = require('../lib/Validator');

class User {
  play() {
    this.purchaseLotto();
    Validator.validatePurchaseAmount(this.amount);
  }

  purchaseLotto() {
    Console.readLine(LOTTO_MESSAGE.INPUT_AMOUNT, (amount) => {
      this.amount = amount;
    });
  }
}

module.exports = User;
