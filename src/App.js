const User = require('./User');
const Validator = require('./Validator');
const { throwError } = require('./util');
const { ERROR_MESSAGE } = require('../constant/constant');

class App {
  constructor() {
    this.user = new User();
  }

  play() {
    this.purchase();
    this.validateAmount();
  }

  purchase() {
    this.user.getUserPurchaseAmount();
    this.amount = this.user.amount;
  }

  validateAmount() {
    if (!Validator.checkAmount(this.amount)) throwError(ERROR_MESSAGE.AMOUNT);
  }
}

const app = new App();
app.play();

module.exports = App;
