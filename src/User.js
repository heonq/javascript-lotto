const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_MESSAGE } = require('../constants/lottoMessage');
const { LOTTO } = require('../constants/lottoValue');
const Validator = require('../lib/Validator');

class User {
  play() {
    this.purchaseLotto();
    Validator.validatePurchaseAmount(this.amount);
    this.getQuantity();
    this.printQuantity();
  }

  purchaseLotto() {
    Console.readLine(LOTTO_MESSAGE.INPUT_AMOUNT, (amount) => {
      this.amount = amount;
    });
  }
  getQuantity() {
    this.quantity = this.amount / LOTTO.PRICE;
  }
  printQuantity() {
    Console.print(this.quantity + LOTTO_MESSAGE.PRINT_QUANTITY);
  }
}

module.exports = User;
