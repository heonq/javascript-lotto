const { ERROR_MESSAGE, LOTTO } = require('../constant/constant');
const { throwError } = require('./util');

class Validator {
  static checkAmount(amount) {
    if (amount === 0 || amount % LOTTO.PRICE !== 0) {
      throwError(ERROR_MESSAGE.AMOUNT);
    }
  }
}

module.exports = Validator;
