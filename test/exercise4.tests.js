const expect = require('chai').expect;
const asyncYolo = require('../src/exercise4').asyncYolo;

describe('GIVEN function asyncYolo', function() {

  it('WHEN asynchronous thing is not broken THEN should return THE result', function(done) {

    asyncYolo(data => {

      expect(data).to.eql(['AZEQSDWXC' , 'RTYFGHVBN', 'UIOJKL']);

      done();

    });

  }).timeout(4000);

});