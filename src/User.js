const { Console, Random } = require('@woowacourse/mission-utils');
const { LOTTO_MESSAGE } = require('../constants/lottoMessage');
const { LOTTO, PRIZE_RANK, PRIZE_AMOUNT } = require('../constants/lottoValue');
const Validator = require('../lib/Validator');
const Lotto = require('./Lotto');

class User {
  #storage;

  constructor() {
    this.#storage = [];
    this.prizeCounter = {
      firstRank: 0,
      secondRank: 0,
      thirdRank: 0,
      fourthRank: 0,
      fifthRank: 0,
    };
    this.mainNumbers = [];
  }

  play() {
    this.purchaseLotto();
    this.generateLotto();
    this.printLotto();
    this.getMainNumbers();
    this.getBonusNumber();
    this.compareLotto(this.mainNumbers);
    this.printResult();
    this.printEarningRate();
  }

  purchaseLotto() {
    Console.readLine(LOTTO_MESSAGE.INPUT_AMOUNT, (amount) => {
      Validator.validatePurchaseAmount(amount);
      this.amount = amount;
      this.quantity = this.amount / LOTTO.PRICE;
      Console.print(this.quantity + LOTTO_MESSAGE.PRINT_QUANTITY);
    });
  }
  generateLotto() {
    for (let i = 0; i < this.quantity; i++) {
      const lottoNumber = Random.pickUniqueNumbersInRange(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.NUMBER_COUNT,
      );
      const lotto = new Lotto(lottoNumber);
      this.#storage.push(lotto);
    }
  }

  printLotto() {
    const lottoString = this.getLottoString();
    Console.print(lottoString);
  }

  getLottoString() {
    return this.#storage.reduce((stringConsole, eachLotto) => {
      return stringConsole + `[${eachLotto.getNumbers().join(', ')}]\n`;
    }, '');
  }

  getMainNumbers() {
    Console.readLine(LOTTO_MESSAGE.INPUT_MAIN_NUMBER, (mainNumbers) => {
      this.mainNumbers = mainNumbers.split(',').map(Number);
      Validator.validateMainNumbers(this.mainNumbers);
    });
  }
  getBonusNumber() {
    Console.readLine(LOTTO_MESSAGE.INPUT_BONUS_NUMBER, (bonusNumber) => {
      Validator.validateBonusNumber(bonusNumber, this.mainNumbers);
      this.bonusNumber = Number(bonusNumber);
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
      this.prizeCounter[rank]++;
      return;
    }
  }

  compareBonusNumber(lotto) {
    const userNumber = lotto.getNumbers();
    if (new Set([...userNumber, this.bonusNumber]).size === 6) {
      this.prizeCounter.secondRank++;
    }
  }
  printResult() {
    Console.print(LOTTO_MESSAGE.PRINT_RESULT);
    this.combineAndPrintMessage('THREE_SAME', 'fifthRank');
    this.combineAndPrintMessage('FOUR_SAME', 'fourthRank');
    this.combineAndPrintMessage('FIVE_SAME', 'thirdRank');
    this.combineAndPrintMessage('FIVE_BONUS_SAME', 'secondRank');
    this.combineAndPrintMessage('SIX_SAME', 'firstRank');
    this.close();
  }

  close() {
    Console.close();
  }

  combineAndPrintMessage(matchCounter, rank) {
    Console.print(LOTTO_MESSAGE[matchCounter] + this.prizeCounter[rank] + LOTTO_MESSAGE.QUANTITY);
  }

  printEarningRate() {
    const earningAmount = this.calcEarningAmount();
    const earningRate = ((earningAmount / this.amount) * 100).toFixed(1);
    Console.print(LOTTO_MESSAGE.RATE_OF_RETURN + earningRate + LOTTO_MESSAGE.IS);
  }

  calcEarningAmount() {
    return Object.entries(this.prizeCounter).reduce((sumPrize, [prize, counter]) => {
      let result = PRIZE_AMOUNT[prize] * counter;
      return sumPrize + result;
    }, 0);
  }
}

module.exports = User;
