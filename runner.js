let Converter = require('./src/converter.js')

let converter = new Converter()
let response1 = converter.readCsv('./data/Group01.csv')
let response2 = converter.readCsv('./data/Group02.csv')
let response3 = converter.readCsv('./data/Group03.csv')
let response4 = converter.readCsv('./data/Group04.csv')
let response5 = converter.readCsv('./data/Group05.csv')
let response6 = converter.readCsv('./data/Group06.csv')
let response7 = converter.readCsv('./data/Group07.csv')
let response8 = converter.readCsv('./data/Group08.csv')
let response9 = converter.readCsv('./data/Group09.csv')
let response10 = converter.readCsv('./data/Group10.csv')

converter.createCustomers(response1)
converter.createCustomers(response2)
converter.createCustomers(response3)
converter.createCustomers(response4)
converter.createCustomers(response5)
converter.createCustomers(response6)
converter.createCustomers(response7)
converter.createCustomers(response8)
converter.createCustomers(response9)
converter.createCustomers(response10)

console.log('Customers Count:', converter.customers.length)


converter.createCsvFile()