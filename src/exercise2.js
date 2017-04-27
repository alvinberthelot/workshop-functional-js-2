const chalk = require('chalk');
const _ = require('lodash');

console.log(chalk.cyan('\nEXERCISE 2 LOADED\n'));

const reverseYolo = input => {
  return _.chain(input)
    .fromPairs()
    .reduce(_.multiply, 1)
    .value();
}

module.exports = {
  reverseYolo: reverseYolo,
  run: reverseYolo
}