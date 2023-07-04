const MissionUtils = require('@woowacourse/mission-utils');

const print = (message) => {
  MissionUtils.Console.print(message);
};

const readLine = (querry, callback) => {
  MissionUtils.Console.readLine(querry, callback);
};

const throwError = (message) => {
  throw new Error(message);
};

const random = () => {
  MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
};

const close = () => {
  MissionUtils.Console.close();
};

module.exports = { print, readLine, throwError, random, close };
