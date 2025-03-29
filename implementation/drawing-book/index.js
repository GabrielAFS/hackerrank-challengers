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
 * Calculates the number of steps from the front of the book
 * @param {number} p
 * @returns {number}
 */
const front = (p) => Math.floor(p / 2);

/**
 * Calculates the number of steps from the back of the book
 * @param {number} n
 * @param {number} p
 * @returns {number}
 */
const back = (n, p) => (n % 2 === 0 ? front(n + 1 - p) : front(n - p));

/**
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  @param {number} n
 *  @param {number} p
 *  @returns {number}
 */
function pageCount(n, p) {
  const countFromFront = front(p);
  const countFromBack = back(n, p);

  return Math.min(countFromBack, countFromFront);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const p = parseInt(readLine().trim(), 10);

  const result = pageCount(n, p);

  ws.write(result + "\n");

  ws.end();
}
