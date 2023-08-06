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
  }

  handlePurchase(amount) {
    Validator.validatePurchase(amount);
    OutputView.printPurchase(amount);
    this.#lottoGame.generateLotto(amount);
    OutputView.printLotto(this.#lottoGame);
  }
}

module.exports = Controller;
