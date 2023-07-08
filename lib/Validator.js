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

  static validateMainNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.NOT_SIX_DIGITS);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.DUPLICATED_NUMBER);
    }
    if (
      !numbers.every((number) => {
        return /^\d+$/.test(number) && LOTTO.MIN_NUMBER <= number && number <= LOTTO.MAX_NUMBER;
      })
    ) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
    }
  }

  static validateBonusNumber(number, mainNumbers) {
    if (!/^\d+$/.test(number) && LOTTO.MIN_NUMBER <= number && number <= LOTTO.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
    }
    if (mainNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGE.DUPLICATED_WITH_MAIN_NUMBER);
    }
  }
}

module.exports = Validator;
