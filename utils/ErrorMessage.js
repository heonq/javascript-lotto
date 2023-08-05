const PREFIX = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  lessThanThousand: `${PREFIX}1,000원 이상의 금액을 입력해주세요.`,
  thousandUnit: `${PREFIX}1,000원 단위로 금액을 입력해주세요.`,
  duplicated: `${PREFIX}서로 중복되지 않은 숫자를 입력해 주세요.`,
  outOfRange: `${PREFIX}1부터 45사이의 숫자를 입력해 주세요.`,
  duplicatedWithWinning: `${PREFIX}당첨 번호와 중복되지 않은 숫자를 입력해 주세요.`,
});

module.exports = ERROR_MESSAGE;
