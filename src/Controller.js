const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');
const Validator = require('../utils/Validator');
const LottoGame = require('./LottoGame');

class Controller {
  #lottoGame;
  #winningNumbers;

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
    this.readBonusNumber();
  }

  handleWinningNumbers(numbers) {
    Validator.validateLottoNumbers(numbers);
    OutputView.printMessage(numbers);
    this.#winningNumbers = numbers.split(',').map(Number);
  }
  readBonusNumber() {
    InputView.readBonusNumber(handleBonusNumber.bind(this));
  }
  getWinningNumber() {
    return this.#winningNumbers;
  }

  handleBonusNumber(number) {
    Validator;
  }
}

module.exports = Controller;
