const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');
const Validator = require('../utils/Validator');

class Controller {
  play() {
    this.readPurcahse();
  }

  readPurchase() {
    InputView.readPurchase(this.handlePurchase.bind(this));
  }

  handlePurchase(amount) {
    Validator.validatePurchase(amount);
    OutputView.printMessage(amount);
  }
}

module.exports = Controller;
