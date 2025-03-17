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

/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function nonOptimizedKangaroo(x1, v1, x2, v2) {
  if (x1 === x2) return "YES";
  if ((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1)) return "NO";

  let [newX1, newV1] = x1 > x2 ? [x1, v1] : [x2, v2];
  let [newX2, newV2] = x2 > x1 ? [x1, v1] : [x2, v2];

  while (newX1 > newX2) {
    newX1 += newV1;
    newX2 += newV2;
  }

  return newX1 === newX2 ? "YES" : "NO";
}

function kangaroo(x1, v1, x2, v2) {
  /**
   * This solution uses: https://mundoeducacao.uol.com.br/fisica/encontro-ultrapassagem-uma-aplicacao-movimento-uniforme-.htm
   */
  return v1 > v2 && (x2 - x1) % (v1 - v2) == 0 ? "YES" : "NO";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const x1 = parseInt(firstMultipleInput[0], 10);

  const v1 = parseInt(firstMultipleInput[1], 10);

  const x2 = parseInt(firstMultipleInput[2], 10);

  const v2 = parseInt(firstMultipleInput[3], 10);

  const result = kangaroo(x1, v1, x2, v2);

  ws.write(result + "\n");

  ws.end();
}
