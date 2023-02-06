var assert = require('chai').assert;
var Customer = require('../src/customer.js')

describe('Customer', function() {

  it('should be an instance of Customer', function() {
    let customer = new Customer()

    assert.instanceOf(customer, Customer)
  })
  it('customer should have attributes', function() {
    let customerData = 
      {
        CustomerID: '35771888',
        FirstName: 'John',
        Lastname: 'Doe',
        Address01: '1553 Tree St',
        Address02: '',
        City: 'Southfield',
        State: 'MI',
        ZipCode: '48076',
        
      }
    let customer = new Customer(customerData)
    assert.equal(customerData.CustomerID, customer.CustomerID)

  })

})