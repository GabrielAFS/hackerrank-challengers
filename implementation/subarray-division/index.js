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
 * Returns the sum of the given array items
 * @param {number[]} arr
 * @returns {number}
 */
const arraySum = (arr) => {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

/**
 * Checks if the subarray sum is equal to the given day
 * @param {number[]} subArr
 * @param {number} day
 * @returns {boolean}
 */
const isSumEqualToBirthday = (subArr, day) => {
  return arraySum(subArr) === day;
};

/**
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  @param {number[]} s
 *  @param {number} d
 *  @param {number} m
 *  @returns {number}
 */
function birthday(s, d, m) {
  // first case
  if (s.length < m) return 0;

  // second case
  if (s.length === m) {
    return isSumEqualToBirthday(s, d) ? 1 : 0;
  }

  let numberOfMatches = 0;

  // s.length - (m - 1) -> ensures that it will always exist a subarray of length equal to m
  for (let i = 0; i < s.length - (m - 1); i++) {
    const subArr = s.slice(i, i + m);
    numberOfMatches += isSumEqualToBirthday(subArr, d) ? 1 : 0;
  }

  return numberOfMatches;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((sTemp) => parseInt(sTemp, 10));

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const d = parseInt(firstMultipleInput[0], 10);

  const m = parseInt(firstMultipleInput[1], 10);

  const result = birthday(s, d, m);

  ws.write(result + "\n");

  ws.end();
}
