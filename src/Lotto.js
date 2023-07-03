const Validator = require('./Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Validator.validateNumbers(numbers);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
