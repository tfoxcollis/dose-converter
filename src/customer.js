
class Customer {
  constructor (props) {
    this.CustomerID = props?.CustomerID
    this.FirstName = props?.FirstName
    this.Lastname = props?.Lastname
    this.Address01 = props?.Address01
    this.Address02 = props?.Address02
    this.City = props?.City
    this.State = props?.State
    this.ZipCode = props?.ZipCode
  }
}

module.exports = Customer
