"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/**
 * Complete the getMoneySpent function below.
 *
 * The function is expected to return the maximum amount of money
 * she can spend on a keyboard and USB drive,
 * or -1 if she can't purchase both items
 * @param {number[]} keyboards
 * @param {number[]} drives
 * @param {number} b
 * @returns {number}
 */
function getMoneySpent(keyboards, drives, b) {
  const availableSetups = [];

  for (let i = 0; i < keyboards.length; i++) {
    if (keyboards[i] >= b) continue;

    for (let j = 0; j < drives.length; j++) {
      const amount = keyboards[i] + drives[j];

      if (amount <= b) availableSetups.push(amount);
    }
  }

  return availableSetups.length === 0 ? -1 : Math.max(...availableSetups);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const bnm = readLine().split(" ");

  const b = parseInt(bnm[0], 10);

  const n = parseInt(bnm[1], 10);

  const m = parseInt(bnm[2], 10);

  const keyboards = readLine()
    .split(" ")
    .map((keyboardsTemp) => parseInt(keyboardsTemp, 10));

  const drives = readLine()
    .split(" ")
    .map((drivesTemp) => parseInt(drivesTemp, 10));

  /*
   * The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
   */

  let moneySpent = getMoneySpent(keyboards, drives, b);

  ws.write(moneySpent + "\n");

  ws.end();
}
