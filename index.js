const chalk = require('chalk');
const exercise1 = require('./src/exercise1');
const exercise2 = require('./src/exercise2');

const exercise0 = {
  run: () => {
    return chalk.red(`\nPlease replace ${chalk.red('exercise0')} by another one in index.js\n`);
  }
};

const exercise = exercise0;

console.log(chalk.yellow('RESULT', exercise.run()));