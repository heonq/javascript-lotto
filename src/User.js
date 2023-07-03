const { readLine } = require('./util');
const { LOTTO_MESSAGE } = require('../constant/constant');

class User {
  getUserPurchaseAmount() {
    readLine(LOTTO_MESSAGE.INPUT_AMOUNT, (amount) => {
      this.amount = amount;
    });
  }
}

module.exports = User;
