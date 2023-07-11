const { Console, Random } = require('@woowacourse/mission-utils');
const { LOTTO_MESSAGE } = require('../constants/lottoMessage');
const { LOTTO, PRIZE_RANK } = require('../constants/lottoValue');
const Validator = require('../lib/Validator');
const Lotto = require('./Lotto');
const Accounting = require('./Accounting');

class User {
  #storage;
  #prizeCounter;
  #mainNumbers;
  #bonusNumber;

  constructor() {
    this.#storage = [];
    this.#prizeCounter = {
      firstRank: 0,
      secondRank: 0,
      thirdRank: 0,
      fourthRank: 0,
      fifthRank: 0,
    };
    this.#mainNumbers = [];
    this.#bonusNumber = 0;
    this.accounting = new Accounting();
  }

  play() {
    this.purchaseLotto();
    this.generateLotto();
    this.printLotto();
    this.getMainNumbers();
    this.getBonusNumber();
    this.compareLotto(this.#mainNumbers);
    this.printResult();
  }

  purchaseLotto() {
    Console.readLine(LOTTO_MESSAGE.INPUT_AMOUNT, this.setAmount.bind(this));
    Console.print(this.quantity + LOTTO_MESSAGE.PRINT_QUANTITY);
  }

  setAmount(amount) {
    Validator.validatePurchaseAmount(amount);
    this.amount = amount;
    this.quantity = this.amount / LOTTO.PRICE;
  }

  generateLotto() {
    for (let i = 0; i < this.quantity; i++) {
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
    Console.readLine(LOTTO_MESSAGE.INPUT_MAIN_NUMBER, (mainNumbers) => {
      this.#mainNumbers = mainNumbers.split(',').map(Number);
      Validator.validateMainNumbers(this.#mainNumbers);
    });
  }
  getBonusNumber() {
    Console.readLine(LOTTO_MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      Validator.validateBonusNumber(bonusNumber, this.#mainNumbers);
      this.#bonusNumber = Number(bonusNumber);
    });
  }

  compareLotto(mainNumbers) {
    this.#storage.forEach((lotto) => {
      const userNumber = lotto.getNumbers();
      const counter = LOTTO.NUMBER_COUNT * 2 - new Set([...mainNumbers, ...userNumber]).size;
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
  printResult() {
    Console.print(LOTTO_MESSAGE.PRINT_RESULT);
    this.combineAndPrintMessage('THREE_SAME', 'fifthRank');
    this.combineAndPrintMessage('FOUR_SAME', 'fourthRank');
    this.combineAndPrintMessage('FIVE_SAME', 'thirdRank');
    this.combineAndPrintMessage('FIVE_BONUS_SAME', 'secondRank');
    this.combineAndPrintMessage('SIX_SAME', 'firstRank');
    this.accounting.printEarningRate(this.amount, this.#prizeCounter);
    Console.close();
  }

  combineAndPrintMessage(matchCounter, rank) {
    Console.print(LOTTO_MESSAGE[matchCounter] + this.#prizeCounter[rank] + LOTTO_MESSAGE.QUANTITY);
  }
}

module.exports = User;
