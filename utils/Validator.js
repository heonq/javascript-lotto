const ERROR_MESSAGE = require('./ErrorMessage');
const { CONSTANTS } = require('./Constants');

const Validator = {
  validatePurchase(amount) {
    if (+amount < CONSTANTS.lottoPrice) throw new Error(ERROR_MESSAGE.lessThanThousand);
    if (+amount % CONSTANTS.lottoPrice !== 0) throw new Error(ERROR_MESSAGE.thousandUnit);
  },
  validateLottoNumbers(numbers) {
    if (numbers.some((number) => Number.isNaN(+number))) throw new Error(ERROR_MESSAGE.isNaN);
    if (numbers.length !== CONSTANTS.validLength) throw new Error(ERROR_MESSAGE.invalidLength);
    if (new Set([...numbers]).size !== CONSTANTS.validLength)
      throw new Error(ERROR_MESSAGE.duplicated);
    if (!numbers.every((number) => CONSTANTS.minNumber <= number && number <= CONSTANTS.maxNumber))
      throw new Error(ERROR_MESSAGE.outOfRange);
  },
  validateBonusNumber(number, winningNumbers) {
    if (winningNumbers.includes(+number)) throw new Error(ERROR_MESSAGE.duplicatedWithWinning);
    if (!(CONSTANTS.minNumber <= +number && +number <= CONSTANTS.maxNumber))
      throw new Error(ERROR_MESSAGE.outOfRange);
  },
};

module.exports = Validator;
