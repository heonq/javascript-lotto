const PREFIX = '[ERROR] ';

const LOTTO_MESSAGE = Object.freeze({
  INPUT_AMOUNT: '구입금액을 입력해 주세요.\n',
  PRINT_QUANTITY: '개를 구매했습니다.\n',
  INPUT_MAIN_NUMBER: '당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  PRINT_RESULT: '당첨 통계\n---',
  QUANTITY: '개',
  THREE_SAME: '3개 일치 (5,000원) - ',
  FOUR_SAME: '4개 일치 (50,000원) - ',
  FIVE_SAME: '5개 일치 (1,500,000원) - ',
  FIVE_BONUS_SAME: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  SIX_SAME: '6개 일치 (2,000,000,000원) - ',
  RATE_OF_RETURN: '총 수익률은 ',
  IS: '%입니다.\n',
});

const ERROR_MESSAGE = Object.freeze({
  NOT_THOUSAND_UNIT: PREFIX + '1,000원 단위로 금액을 입력해주세요.',
  LESS_THAN_THOUSAND: PREFIX + '1,000원 이상의 금액을 입력해주세요.',
  NOT_NUMBER: PREFIX + '숫자를 입력해주세요.',
  NOT_SIX_DIGITS: PREFIX + '6개의 숫자를 입력해주세요.',
  OUT_OF_RANGE: PREFIX + '1에서 45 사이의 숫자를 입력해주세요.',
  DUPLICATED_NUMBER: PREFIX + '중복되지 않은 숫자를 입력해주세요.',
  DUPLICATED_WITH_MAIN_NUMBER: PREFIX + '당첨번호와 중복되지 않은 숫자를 입력해주세요.',
});

module.exports = { LOTTO_MESSAGE, ERROR_MESSAGE };
