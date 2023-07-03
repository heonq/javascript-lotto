const LOTTO_MESSAGE = {
  INPUT_AMOUNT: '구입 금액을 입력해주세요.',
  PRINT_QTY: '개를 구매하셨습니다.',
  INPUT_MAIN_NUMBERS: '당첨 번호를 입력해 주세요.',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  PRINT_RESULT: '당첨 통계\n---',
};

const ERROR_MESSAGE = {
  AMOUNT: '[ERROR] 로또 구매 금액은 1,000원 단위로 입력해주세요.',
  MAIN_NUBER: {
    NOT_IN_RANGE: '[ERROR] 1부터 45 사이의 숫자를 입력해주세요.',
    DUPLICATED: '[ERROR] 중복되지 않은 6개의 숫자를 입력해주세요.',
    NOT_SIX: '[ERROR] 6개의 숫자를 입력해주세요.',
    MISSING_COMMA: '[ERROR] 콤마(,)를 이용해 숫자를 구분해주세요.',
  },
  BONUS_NUMBER: {
    DUPLICATED: '[ERROR] 당첨번호와 중복되지 않는 숫자를 입력해주세요.',
    NOT_IN_RANGE: '[ERROR] 1부터 45 사이의 숫자를 입력해주세요.',
  },
};

const LOTTO = {
  PRICE: 1_000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBER_COUNT: 6,
};

module.exports(LOTTO_MESSAGE, ERROR_MESSAGE, LOTTO);
