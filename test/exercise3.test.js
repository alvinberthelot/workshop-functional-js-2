const expect = require('chai').expect;
const injectStar = require('../src/exercise3').injectStar;

describe('GIVEN function injectStar', function() {

  it('WHEN string is empty THEN should return an empty string', function() {
    const input = '';
    const output = '';
    expect(injectStar(input)).to.eql(output);
  });

  it('WHEN string is not empty and has one pair THEN should return appropriate string', function() {
    const input = 'hello';
    const output = 'hel*lo';
    expect(injectStar(input)).to.eql(output);
  });

  it('WHEN string is not empty and has two pairs THEN should return appropriate string', function() {
    const input = 'xxyy';
    const output = 'xx*yy';
    expect(injectStar(input)).to.eql(output);
  });

  it('WHEN string is not empty and has only pairs THEN should return appropriate string', function() {
    const input = 'aaaa';
    const output = 'a*a*a*a';
    expect(injectStar(input)).to.eql(output);
  });

});