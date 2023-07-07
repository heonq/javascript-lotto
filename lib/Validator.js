const { ERROR_MESSAGE } = require('../constants/lottoMessage');
const { LOTTO } = require('../constants/lottoValue');

class Validator {
  static validatePurchaseAmount(amount) {
    if (!amount.match(/^\d+$/)) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
    if (amount < LOTTO.PRICE) {
      throw new Error(ERROR_MESSAGE.LESS_THAN_THOUSAND);
    }
    if (amount % LOTTO.PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_THOUSAND_UNIT);
    }
  }
}

module.exports = Validator;
