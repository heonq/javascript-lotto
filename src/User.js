const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_MESSAGE } = require('../constants/lottoMessage');
const { LOTTO } = require('../constants/lottoValue');
const Validator = require('../lib/Validator');

class User {
  play() {
    this.purchaseLotto();
  }

  purchaseLotto() {
    Console.readLine(LOTTO_MESSAGE.INPUT_AMOUNT, (amount) => {
      Validator.validatePurchaseAmount(amount);
      this.amount = amount;
      this.quantity = this.amount / LOTTO.PRICE;
      Console.print(this.quantity + LOTTO_MESSAGE.PRINT_QUANTITY);
    });
  }
}

module.exports = User;
