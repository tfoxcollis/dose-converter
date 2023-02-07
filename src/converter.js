const fs = require("fs")
const Customer = require("./customer")

class Converter {
  constructor () {
    this.customers = []
  }

  readCsv(filePath) {
    let csv = fs.readFileSync(filePath)
    let csvArr = csv.toString().split("\r")
    return csvArr
  }
 
  createCustomers(custArr) {
    //remove headers
    custArr.shift()
    custArr.forEach((customer) => {
      const splitCust = customer.split(',')
      let custObj = {
        CustomerID: splitCust[0],
        FirstName: splitCust[1],
        Lastname: splitCust[2],
        Address01: splitCust[3],
        Address02: splitCust[4],
        City: splitCust[5],
        State: splitCust[6],
        ZipCode: splitCust[7]
      }

      this.customers.push(new Customer(custObj))
    })
    return 'Success!'
  }

  sumZipCodes() {
    let totalZip = this.customers.reduce((acc, cust) => {
      if(acc[cust.ZipCode]) {
        acc[cust.ZipCode] += 1
      }else {
        acc[cust.ZipCode] = 1
      }
      return acc
    }, {})

    return totalZip
  }

  //update method name
  convertToString(zipObj) {
    let finalZip = [['Zip Code', 'Total Customers'].join(',')]
    for(const zipCodeKey in zipObj) {
      let zipTotal = [zipCodeKey, zipObj[zipCodeKey]].join(',')
      finalZip.push(zipTotal)
    }
    return finalZip.join('\r\n')
  }

  //update variable name
  createCsvFile() {
    let zipTotalObj = this.sumZipCodes()
    let csvString = this.convertToString(zipTotalObj);
    fs.writeFileSync('output.csv', csvString);
   
  }
}


module.exports = Converter