const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');
const Validator = require('../utils/Validator');
const LottoGame = require('./LottoGame');

class Controller {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  play() {
    this.readPurchase();
  }

  readPurchase() {
    InputView.readPurchase(this.handlePurchase.bind(this));
    OutputView.printLotto(this.#lottoGame);
    this.readWinningNumbers();
  }

  handlePurchase(amount) {
    Validator.validatePurchase(amount);
    OutputView.printPurchase(amount);
    this.#lottoGame.generateLotto(amount);
  }

  readWinningNumbers() {
    InputView.readWinningNumbers(handleWinningNumbers.bind(this));
  }

  handleWinningNumbers(numbers) {
    numbers = numbers.split(',').map(Number);
    Validator.validateLottoNumbers(numbers);
  }
}

module.exports = Controller;
