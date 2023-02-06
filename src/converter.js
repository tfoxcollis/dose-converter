const fs = require("fs")

class Converter {
  constructor () {

  }

  readCsv(filePath) {
    let csv = fs.readFileSync(filePath)
    let csvArr = csv.toString().split("\r")
    return csvArr
  }
}


module.exports = Converter