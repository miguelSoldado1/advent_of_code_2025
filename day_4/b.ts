const input = await Deno.readTextFile("./day_4/input.txt");
const lines = input.split("\r\n");

const width = lines[0].length;
const height = lines.length;

function canAccess(x: number, y: number) {
  let count = 0;

  for (let dx = Math.max(x - 1, 0); dx <= Math.min(x + 1, width - 1); dx++) {
    for (let dy = Math.max(y - 1, 0); dy <= Math.min(y + 1, height - 1); dy++) {
      if (lines[dy][dx] === "@") count++;
      if (count > 4) return false;
    }
  }

  if (count <= 4) {
    lines[y] = lines[y].substring(0, x) + "." + lines[y].substring(x + 1);
    return true;
  }
}

let total = 0;
let accumulator = total;

while (true) {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (lines[j][i] === "@" && canAccess(i, j)) {
        total++;
      }
    }
  }

  if (accumulator === total) break;
  accumulator = total;
}

console.log(total);
