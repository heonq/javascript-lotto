const CONSTANTS = Object.freeze({
  validLength: 6,
  minNumber: 1,
  maxNumber: 45,
  lottoPrice: 1000,
  prizeMinimumCount: 3,
  checkBonusCount: 5,
});

const LOTTO_PRIZE = Object.freeze({
  3: 'fifthPrize',
  4: 'fourthPrize',
  5: 'thirdPrize',
  6: 'firstPrize',
});

const PRIZE_AMOUNT = Object.freeze({
  fifthPrize: 5_000,
  fourthPrize: 50_000,
  thirdPrize: 1_500_000,
  secondPrize: 30_000_000,
  firstPrize: 2_000_000_000,
});

module.exports = { CONSTANTS, LOTTO_PRIZE, PRIZE_AMOUNT };
