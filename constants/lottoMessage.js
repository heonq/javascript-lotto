const LOTTO_MESSAGE = Object.freeze({
  INPUT_AMOUNT: '구입금액을 입력해 주세요.\n',
  PRINT_QUANTITY: '개를 구매했습니다.',
  INPUT_MAIN_NUMBER: '당첨 번호를 입력해 주세요.',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  PRINT_RESULT: '당첨 통계\n---',
  QUATITY: '개',
  THREE_SAME: '3개 일치 (5,000원) - ',
  FOUR_SAME: '4개 일치 (50,000원) - ',
  FIVE_SAME: '5개 일치 (1,500,000원) - ',
  FIVE_BONUS_SAME: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  SIX_SAME: '6개 일치 (2,000,000,000원) - ',
  RATE_OF_RETURN: '총 수익률은 ',
  IS: '%입니다.',
});

const ERROR_MESSAGE = Object.freeze({
  NOT_THOUSAND_UNIT: '1,000원 단위로 금액을 입력해주세요.',
  LESS_THAN_THOUSAND: '1,000원 이상의 금액을 입력해주세요.',
  NOT_NUMBER: '숫자를 입력해주세요.',
});

module.exports = { LOTTO_MESSAGE, ERROR_MESSAGE };
