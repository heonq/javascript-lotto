const { Console, Random } = require('@woowacourse/mission-utils');
const { LOTTO_MESSAGE } = require('../constants/lottoMessage');
const { LOTTO, PRIZE_RANK } = require('../constants/lottoValue');
const Validator = require('../lib/Validator');
const Lotto = require('./Lotto');
const Accounting = require('./Accounting');
const Input = require('./Input.js');
const Output = require('./Output.js');

class User {
  #storage;
  #prizeCounter;
  #mainNumbers;
  #bonusNumber;
  #quantity;
  #amount;
  #earningRate;

  constructor() {
    this.#storage = [];
    this.#prizeCounter = {
      fifthRank: 0,
      fourthRank: 0,
      thirdRank: 0,
      secondRank: 0,
      firstRank: 0,
    };
    this.#mainNumbers = [];
    this.accounting = new Accounting();
  }

  play() {
    this.purchaseLotto();
    this.generateLotto();
    this.printLotto();
    this.getMainNumbers();
    this.getBonusNumber();
    this.compareLotto();
    Output.printResult(this);
    Output.printEarningRate(this.getEarningRate());
    Console.close();
  }

  purchaseLotto() {
    Console.readLine(LOTTO_MESSAGE.INPUT_AMOUNT, this.setAmount.bind(this));
    Console.print(this.#quantity + LOTTO_MESSAGE.PRINT_QUANTITY);
  }

  setAmount(amount) {
    Validator.validatePurchaseAmount(amount);
    this.#amount = amount;
    this.#quantity = this.#amount / LOTTO.PRICE;
  }

  generateLotto() {
    for (let i = 0; i < this.#quantity; i++) {
      const lottoNumber = Random.pickUniqueNumbersInRange(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.NUMBER_COUNT,
      );
      this.#storage.push(new Lotto(lottoNumber));
    }
  }

  printLotto() {
    const lottoString = this.#storage.reduce((stringConsole, eachLotto) => {
      return stringConsole + `[${eachLotto.getNumbers().join(', ')}]\n`;
    }, '');
    Console.print(lottoString);
  }
  getMainNumbers() {
    Input.readMainNumbers(this.handleMainNumbers.bind(this));
  }

  handleMainNumbers(mainNumbers) {
    this.#mainNumbers = mainNumbers.split(',').map(Number);
    Validator.validateMainNumbers(this.#mainNumbers);
  }

  getBonusNumber() {
    Input.readBonusNumbers(this.handleBonusNumber.bind(this));
  }

  handleBonusNumber(bonusNumber) {
    Validator.validateBonusNumber(bonusNumber, this.#mainNumbers);
    this.#bonusNumber = Number(bonusNumber);
  }

  compareLotto() {
    this.#storage.forEach((lotto) => {
      const userNumber = lotto.getNumbers();
      const counter = LOTTO.NUMBER_COUNT * 2 - new Set([...this.#mainNumbers, ...userNumber]).size;
      this.updatePrizeCounter(counter, lotto);
    });
  }

  updatePrizeCounter(counter, lotto) {
    if (counter < 3) {
      return;
    }

    if (counter === 5) {
      this.compareBonusNumber(lotto);
      return;
    }
    if (2 < counter) {
      const rank = PRIZE_RANK[counter];
      this.#prizeCounter[rank]++;
      return;
    }
  }

  compareBonusNumber(lotto) {
    const userNumber = lotto.getNumbers();
    if (new Set([...userNumber, this.#bonusNumber]).size === 6) {
      this.#prizeCounter.secondRank++;
    }
  }

  getEarningRate() {
    return this.accounting.getEarningRate(this.#amount, this.#prizeCounter);
  }

  getPrizeCounter() {
    return this.#prizeCounter;
  }
}

module.exports = User;
