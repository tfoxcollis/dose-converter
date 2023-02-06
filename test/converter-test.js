var assert = require('chai').assert;
var Converter = require('../src/converter.js')

describe('Converter', function() {

  it('should be an instance of converter', function() {
    var converter = new Converter();

    assert.instanceOf(converter, Converter)
  })
})