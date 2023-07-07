const User = require('../src/User.js');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 구매 테스트', () => {
  test('사용자가 로또를 구매했을 때 수량이 정상적으로 출력되는지 테스트', () => {
    mockQuestions(['5000']);
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
      [3, 4, 5, 6, 7, 8],
      [1, 2, 3, 4, 5, 6],
      [6, 7, 8, 9, 10, 11],
    ]);
    const logs = ['5개를 구매했습니다.'];
    const logSpy = getLogSpy();
    const user = new User();
    user.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
