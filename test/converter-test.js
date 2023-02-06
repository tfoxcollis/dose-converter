var assert = require('chai').assert;
var Converter = require('../src/converter.js')

describe('Converter', function() {

  it('should be an instance of converter', function() {
    var converter = new Converter();

    assert.instanceOf(converter, Converter)
  })
  it('should take in a csv file and read it', function() {
    var converter = new Converter()
    var testData = 'CustomerID,FirstName,Lastname,Address01,Address02,City,State,ZipCode'
    var response1 = converter.readCsv('./data/Group01.csv')

    assert.equal(response1[0], testData)

    var response2 = converter.readCsv('./data/Group02.csv')
    var response3 = converter.readCsv('./data/Group03.csv')

    assert.equal(response2[0], testData)
    assert.equal(response3[0], testData)

  })

})