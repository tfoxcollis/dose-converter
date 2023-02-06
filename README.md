# Dose Health Converter Challenge

## Requirements

- Write a program to access CSV files, count how many addresses are in each zip code, and create a summary file containing this data.

## Installation Steps

1. Clone repo
2. Run npm install
3. To run the unit tests, in the command line type `npm test test/*`.  With all test passing, you will find an output.csv file in the root directory.
4. The test scripts only used the first CSV file, to get the full summary of all 10 CSV files run `node runner.js` in your command line.  You will find the output.csv file in your root directory.

## Technologies used

- Javascript
- Mocha/Chai
- Bundled with Node v14.21.2

## Execution

- Created a converter in Javascript to read/parse a CSV file.  This converter creates a collection of customer objects that I used to create the new summary report.  This summary report is a CSV file that contains zip codes and the number of customers per zip code. I then created a runner.js file to parse all 10 csv files I was provided with that then creates a full summary report from all 90k+ customers.  For testing I used the Mocha testing framework with the Chai assertion library to test each class method as I developed them.

## Ideas for next iterations

- Error handling in case of invalid csv/file formats
- Dynamic read/write capabilities, including varying delimiters, ability to include/not include headers
- Incorporating this Javascript module in an express api so that when hosted this could be utilized with a frontend application
