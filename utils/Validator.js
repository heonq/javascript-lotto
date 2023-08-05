const ERROR_MESSAGE = require('./ErrorMessage');

const Validator = {
  validatePurchase(amount) {
    if (+amount < 1000) throw new Error(ERROR_MESSAGE.lessThanThousand);
    if (+amount % 1000 !== 0) throw new Error(ERROR_MESSAGE.thousandUnit);
  },
};

module.exports = Validator;
