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
 * Build an object of arrays where each of the array
 * it is a item of the given array "arr"
 * @param {number[]} arr
 * @returns {object}
 */
const buildPairObject = (arr) => {
  return arr.reduce((prevValue, currValue) => {
    return {
      ...prevValue,
      [currValue]: !prevValue[currValue]
        ? [currValue]
        : prevValue[currValue].concat(currValue),
    };
  }, {});
};

/**
 * Calculate the number of pairs from a given object of arrays
 * @param {object} pairObj
 * @returns {number}
 */
const calculateNumberOfPairs = (pairObj) => {
  return Object.values(pairObj).reduce((prevValue, currValue) => {
    const numberOfPairs = Math.floor(currValue.length / 2);
    return prevValue + numberOfPairs;
  }, 0);
};

/**
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 * @param {number[]} ar
 * @returns {number}
 */
function sockMerchant(ar) {
  return calculateNumberOfPairs(buildPairObject(ar));
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const ar = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result = sockMerchant(ar);

  ws.write(result + "\n");

  ws.end();
}
