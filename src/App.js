const User = require('./User');

class App {
  constructor() {
    this.user = new User();
  }

  play() {
    this.purchase();
  }

  purchase() {
    this.user.getUserPurchaseAmount();
  }
}

const app = new App();
app.play();

module.exports = App;
