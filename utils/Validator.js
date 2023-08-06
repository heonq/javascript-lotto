const ERROR_MESSAGE = require('./ErrorMessage');
const CONSTANTS = require('./Constants');

const Validator = {
  validatePurchase(amount) {
    if (+amount < 1000) throw new Error(ERROR_MESSAGE.lessThanThousand);
    if (+amount % 1000 !== 0) throw new Error(ERROR_MESSAGE.thousandUnit);
  },
  validateLottoNumbers(numbers) {
    if (numbers.length !== CONSTANTS.validLength) throw new Error(ERROR_MESSAGE.invalidLength);
    if (new Set([...numbers]).size !== CONSTANTS.validLength)
      throw new Error(ERROR_MESSAGE.duplicated);
    if (!numbers.every((number) => CONSTANTS.minNumber <= number && number <= CONSTANTS.maxNumber))
      throw new Error(ERROR_MESSAGE.outOfRange);
  },
  validateBonusNumber(number, lottoGame) {
    const winningNumbers = lottoGame.getWinningNumbers();
    if (winningNumbers.includes(+number)) throw new Error(ERROR_MESSAGE.duplicatedWithWinning);
    if (!CONSTANTS.minNumber <= +number && +number <= CONSTANTS.maxNumber)
      throw new Error(ERROR_MESSAGE.outOfRange);
  },
};

module.exports = Validator;
