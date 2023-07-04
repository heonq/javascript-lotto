const { ERROR_MESSAGE, LOTTO } = require('../constant/constant');
const { throwError } = require('./util');

class Validator {
  static validateAmount(amount) {
    if (!Validator.validateThousandUnit(amount)) {
      throwError(ERROR_MESSAGE.THOUSAND_UNIT);
    }
    if (!Validator.validateNaN(Number(amount))) {
      throwError(ERROR_MESSAGE.INPUT_NAN);
    }
  }

  static validateThousandUnit(amount) {
    return amount === 0 || amount % LOTTO.PRICE !== 0;
  }

  static validateNaN(amount) {
    return /^\d+$/.test(amount);
  }

  static validateNumbers(numbers) {
    if (!Validator.validateLength(numbers)) {
      throwError(ERROR_MESSAGE.LENGTH);
    }

    if (!Validator.validateDuplicated(numbers)) {
      throwError(ERROR_MESSAGE.DUPLICATED);
    }

    if (!Validator.validateNumberInRange(numbers)) {
      throwError(ERROR_MESSAGE.NOT_IN_RANGE);
    }
  }

  static validateNumberInRange(MainNumber) {
    return MainNumber.every(
      (digit) =>
        !Number.isNaN(Number(digit)) && digit <= LOTTO.MIN_NUMBER && digit <= LOTTO.MAX_NUMBER,
    );
  }

  static validateDuplicated(MainNumber) {
    return new Set(MainNumber).size === 6;
  }

  static validateLength(MainNumber) {
    return MainNumber.length === 6;
  }

  static validateComma(originalString) {
    return originalString.split(',').length === 6;
  }
}

module.exports = Validator;
