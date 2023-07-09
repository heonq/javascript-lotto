const LOTTO = Object.freeze({
  PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBER_COUNT: 6,
});

const PRIZE = {
  6: 'firstRank',
  5: 'thirdRank',
  4: 'fourthRank',
  3: 'fifthRank',
};

module.exports = { LOTTO, PRIZE };
