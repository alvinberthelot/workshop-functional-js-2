const chalk = require('chalk');
const _ = require('lodash');

console.log(chalk.cyan('\nEXERCISE 4 LOADED\n'));

var promise200 = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 200, ['AZE', 'RTY', 'UIO'])
})

var promise400 = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 400, ['QSD', 'FGH', 'JKL'])
})

var promise600 = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 600, ['WXC', 'VBN'])
})

const asyncYolo = (cb) => {

  // easy way to succeed, but please use promises instead
  // setTimeout(() => {
  //   cb(['AZEQSDWXC' , 'RTYFGHVBN', 'UIOJKL'])
  // }, 800)

  // Your future job begins here ...

}

module.exports = {
  asyncYolo: asyncYolo,
  run: asyncYolo
}