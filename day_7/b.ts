const input = await Deno.readTextFile("./day_7/input.txt");
const lines = input.split("\r\n");

let total = 0;
const beam = lines[0].indexOf("S");

function goLeft(col: number, row: number) {
  for (let i = row; i < lines.length; i++) {
    if (col < 0 || col >= lines[i].length) break;
    if (lines[i][col] === "^") {
      total++;
      goLeft(col - 1, i + 1), goRight(col + 1, i + 1);
      break;
    }
  }
}

function goRight(col: number, row: number) {
  for (let i = row; i < lines.length; i++) {
    if (col < 0 || col >= lines[i].length) break;
    if (lines[i][col] === "^") {
      total++;
      goLeft(col - 1, i + 1), goRight(col + 1, i + 1);
      break;
    }
  }
}

for (let i = 1; i < lines.length; i++) {
  if (lines[i][beam] === "^") {
    total++;
    goLeft(beam - 1, i + 1), goRight(beam + 1, i + 1);
    break;
  }
}

console.log(total + 1);
