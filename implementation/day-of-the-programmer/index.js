"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/**
 * Check if the given year is leap or not based on the Gregorian calendar
 *
 * @param {number} year
 * @returns {boolean}
 */
const isGregorianLeapYear = (year) => {
  if (year % 100 !== 0) return year % 4 === 0;

  return year % 400 === 0;
};

/**
 * Check if the given year is leap or not based on the Julian calendar
 *
 * @param {number} year
 * @returns {boolean}
 */
const isJulianLeapYear = (year) => {
  return year % 4 === 0;
};

/**
 * Check if the given year is leap or not
 *
 * @param {number} year
 * @returns {boolean}
 */
const isLeapYear = (year) => {
  if (year < 1918) return isJulianLeapYear(year);

  return isGregorianLeapYear(year);
};

/**
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 * @param {number} year
 * @returns {string} String date in the format: dd.mm.yyyy
 */
function dayOfProgrammer(year) {
  // Transition year
  // Since they lose 13 days in the transition
  // and 1918 is not a leap year
  // then the solution is add 13 days to 13.09 -> 26.09
  if (year === 1918) {
    return `26.09.${year}`;
  }

  return `${isLeapYear(year) ? "12" : "13"}.09.${year}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim(), 10);

  const result = dayOfProgrammer(year);

  ws.write(result + "\n");

  ws.end();
}
