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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 * @param {number} steps
 * @param {string[]} path
 * @returns {number}
 */
function countingValleys(steps, path) {
  let level = 0;
  let numberOfValleys = 0;

  for (let i = 0; i < steps; i++) {
    const prevLevel = level;
    level += path[i] === "D" ? -1 : 1;

    if (prevLevel < 0 && level === 0) {
      numberOfValleys++;
    }
  }

  return numberOfValleys;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const steps = parseInt(readLine().trim(), 10);

  const path = readLine();

  const result = countingValleys(steps, path);

  ws.write(result + "\n");

  ws.end();
}
