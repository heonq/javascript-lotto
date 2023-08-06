const Validator = require('../utils/Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Validator.validateLottoNumbers(numbers);
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
  drawWinningNumbers(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number)).length;
  }
  drawBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

module.exports = Lotto;
