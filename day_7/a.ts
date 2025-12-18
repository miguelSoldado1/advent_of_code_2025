const input = await Deno.readTextFile("./day_7/input.txt");
const lines = input.split("\r\n");

let total = 0;
const beams = new Set([lines[0].indexOf("S")]);

for (let i = 1; i < lines.length - 1; i++) {
  for (const beam of beams) {
    if (lines[i][beam] === "^") {
      beams.delete(beam), beams.add(beam - 1), beams.add(beam + 1);
      total++;
    }
  }
}

console.log(total);
