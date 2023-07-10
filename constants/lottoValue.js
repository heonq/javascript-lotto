const LOTTO = Object.freeze({
  PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBER_COUNT: 6,
});

const PRIZE_RANK = {
  6: 'firstRank',
  5: 'thirdRank',
  4: 'fourthRank',
  3: 'fifthRank',
};

const PRIZE_AMOUNT = {
  firstRank: '2_000_000_000',
  secondRank: '30_000_000',
  thirdRank: '1_500_000',
  fourthRank: '50_000',
  fifthRank: '5_000',
};

module.exports = { LOTTO, PRIZE_RANK, PRIZE_AMOUNT };
