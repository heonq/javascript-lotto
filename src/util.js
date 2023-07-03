const MissionUtils = require('@woowacourse/mission-utils');

const print = (message) => {
  MissionUtils.Console.print(message);
};

const throwError = (errorMessage) => {
  throw new Error(errorMessage);
};

const readLine = (querry, callback) => {
  MissionUtils.Console.readLine(querry, callback);
};

module.exports = { print, throwError, readLine };
