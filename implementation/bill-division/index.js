"use strict";

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
 * Calculate bill per person (in this case, two people)
 *
 * @param {number} indexToNotInclude
 * @param {number[]} billArr
 * @returns {number}
 */
const calculateBill = (indexToNotInclude, billArr) => {
  const billAmount = billArr.reduce((prevValue, currValue, index) => {
    return indexToNotInclude === index ? prevValue : prevValue + currValue;
  }, 0);

  return billAmount / 2;
};

/**
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  @param {number[]} bill
 *  @param {number} k
 *  @param {number} b
 *  @returns {void}
 */
function bonAppetit(bill, k, b) {
  const billAmount = calculateBill(k, bill);
  const billDiff = b - billAmount;

  console.log(billDiff > 0 ? billDiff : "Bon Appetit");
}

function main() {
  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const k = parseInt(firstMultipleInput[1], 10);

  const bill = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((billTemp) => parseInt(billTemp, 10));

  const b = parseInt(readLine().trim(), 10);

  bonAppetit(bill, k, b);
}
