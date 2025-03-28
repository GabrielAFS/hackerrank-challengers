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
 * Check if the pair is divisible by k
 *
 * @param {[number, number]} pair
 * @param {number} k
 * @returns {boolean}
 */
const isPairDivisibleByK = (pair, k) => {
  const [x, y] = pair;

  return (x + y) % k === 0;
};

/**
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 * @param {number} n
 * @param {number} k
 * @param {number[]} ar
 * @returns {number}
 */
function divisibleSumPairs(n, k, ar) {
  let numberOfMatches = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      numberOfMatches += isPairDivisibleByK([ar[i], ar[j]], k) ? 1 : 0;
    }
  }

  return numberOfMatches;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const k = parseInt(firstMultipleInput[1], 10);

  const ar = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  const result = divisibleSumPairs(n, k, ar);

  ws.write(result + "\n");

  ws.end();
}
