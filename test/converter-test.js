var assert = require('chai').assert;
const { expect } = require('chai');
var Converter = require('../src/converter.js')
const fs = require("fs")


describe('Converter', function() {

  it('should be an instance of converter', function() {
    let converter = new Converter();

    assert.instanceOf(converter, Converter)
  })
  it('should take in a csv file and read it', function() {
    let converter = new Converter()
    let testData = 'CustomerID,FirstName,Lastname,Address01,Address02,City,State,ZipCode'
    let response1 = converter.readCsv('./data/Group01.csv')

    assert.equal(response1[0], testData)

    let response2 = converter.readCsv('./data/Group02.csv')
    let response3 = converter.readCsv('./data/Group03.csv')

    assert.equal(response2[0], testData)
    assert.equal(response3[0], testData)

  })
  it('should create customers', function() {
    let converter = new Converter()
    let response1 = converter.readCsv('./data/Group01.csv')

    let success = converter.createCustomers(response1)
    assert.equal(success, "Success!")
    assert.equal(converter.customers.length, 9736)
    assert.equal(converter.customers[0].ZipCode, 19348)
  })

  it('should create a zipcodes summary', function() {
    let converter = new Converter()
    let response1 = converter.readCsv('./data/Group01.csv')
    converter.createCustomers(response1)

    let totalZip = converter.sumZipCodes()

    assert.equal(totalZip['19348'], 2)
  })
  it('should take zipcode object and convert to csv file', function() {
    let converter = new Converter()
    let response1 = converter.readCsv('./data/Group01.csv')
    converter.createCustomers(response1)

    converter.createCsvFile()
    
    expect(fs.existsSync('output.csv')).to.be.true
  })

})