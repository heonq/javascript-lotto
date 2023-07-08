const Validator = require('../lib/Validator');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Validator.validateMainNumbers(numbers.map(Number));
  }
  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
