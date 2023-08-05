const InputView = require('./View/InputView');

class Controller {
  play() {}

  readPurchase() {
    InputView.readPurchase(this.handlePurchase.bind(this));
  }

  handlePurchase(amount) {}
}
