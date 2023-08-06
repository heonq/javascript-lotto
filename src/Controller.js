const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');
const Validator = require('../utils/Validator');
const LottoGame = require('./LottoGame');

class Controller {
  #lottoGame;
  #winningNumbers;
  #bonusNumber;

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
    InputView.readWinningNumbers(this.handleWinningNumbers.bind(this));
    this.readBonusNumber();
  }

  handleWinningNumbers(numbers) {
    this.#winningNumbers = numbers.split(',').map(Number);
    Validator.validateLottoNumbers(this.#winningNumbers);
    OutputView.printMessage(numbers);
  }
  readBonusNumber() {
    InputView.readBonusNumber(this.handleBonusNumber.bind(this));
  }
  getWinningNumber() {
    return this.#winningNumbers;
  }

  handleBonusNumber(number) {
    Validator.validateBonusNumber(number, this.#winningNumbers);
    this.#bonusNumber = +number;
    OutputView.printMessage(number);
    this.handleDraw();
  }
  handleDraw() {
    this.#lottoGame.handlePrize(this.#winningNumbers, this.#bonusNumber);
  }
}

module.exports = Controller;
