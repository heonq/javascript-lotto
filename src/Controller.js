const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');

class Controller {
  play() {
    this.readPurcahse();
  }

  readPurchase() {
    InputView.readPurchase(this.handlePurchase.bind(this));
  }

  handlePurchase(amount) {
    OutputView.printMessage(amount);
  }
}

module.exports = Controller;
