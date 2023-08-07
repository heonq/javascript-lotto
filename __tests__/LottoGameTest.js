const MissionUtils = require('@woowacourse/mission-utils');
const LottoGame = require('../src/LottoGame');
const { CONSTNATS, CONSTANTS } = require('../utils/Constants');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 게임 테스트', () => {
  test('구매한 로또에 대한 문자열 출력 테스트', () => {
    const lottoGame = new LottoGame();
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    const logs = [
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
    ];
    lottoGame.generateLotto(logs.length * CONSTANTS.lottoPrice);
    expect(lottoGame.getNumbersString()).toEqual(expect.stringContaining(logs.join('\n')));
  });
  test('로또 당첨 결과와 수익률 구하는 기능 테스트', () => {
    const lottoGame = new LottoGame();
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    mockRandoms([
      [1, 2, 3, 8, 9, 10],
      [1, 2, 3, 4, 9, 10],
      [1, 2, 3, 4, 5, 9],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 6],
    ]);
    const log = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 40631100%입니다.',
    ];

    lottoGame.generateLotto(5000);
    lottoGame.handlePrize(winningNumbers, bonusNumber);
    expect(lottoGame.getStatistics()).toEqual(expect.stringContaining(log.join('\n')));
  });
});
