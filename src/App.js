const User = require('./User');

class App {
  constructor() {
    this.user = new User();
  }

  play() {
    this.user.play();
  }
}

module.exports = App;
