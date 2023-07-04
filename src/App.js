const User = require('./User');
const Validator = require('./Validator');

class App {
  constructor() {
    this.user = new User();
  }

  play() {
    this.purchase();
    this.validateAmount(this.amount);
  }

  purchase() {
    this.user.getUserPurchaseAmount();
    this.amount = this.user.amount;
  }

  validateAmount(amount) {
    Validator.validateAmount(amount);
  }
}

const app = new App();
app.play();

module.exports = App;
