const Validator = require('../utils/Validator');
const ERROR_MESSAGE = require('../utils/ErrorMessage');

describe('유효성 검사 테스트', () => {
  test.each([
    [300, ERROR_MESSAGE.lessThanThousand],
    [1500, ERROR_MESSAGE.thousandUnit],
  ])('사용자가 입력한 구매비용에 대한 유효성 검사 테스트', (amount, errorMessage) => {
    expect(() => Validator.validatePurchase(amount)).toThrow(errorMessage);
  });
  test.each([
    ['0', ERROR_MESSAGE.outOfRange],
    ['a', ERROR_MESSAGE.isNaN],
    ['6', ERROR_MESSAGE.duplicatedWithWinning],
  ])('사용자가 입력한 보너스 번호에 대한 유효성 검사 테스트', (bonusNumber, errorMessage) => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => Validator.validateBonusNumber(+bonusNumber, winningNumbers)).toThrow(errorMessage);
  });
});
