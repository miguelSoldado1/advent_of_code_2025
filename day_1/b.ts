const input = await Deno.readTextFile("./day_1/input.txt");
const lines = input.split(/\r?\n/).filter(Boolean);

let curr = 50;
let count = 0;

for (const line of lines) {
  const dir = line[0];
  const num = parseInt(line.slice(1), 10);

  if (dir === "L") {
    if (curr === 0) {
      count += Math.floor(num / 100);
    } else if (num >= curr) {
      count += Math.floor((num - curr) / 100) + 1;
    }
    curr = (((curr - num) % 100) + 100) % 100;
  } else if (dir === "R") {
    const target = (100 - curr) % 100;
    if (target === 0) {
      count += Math.floor(num / 100);
    } else if (num >= target) {
      count += Math.floor((num - target) / 100) + 1;
    }
    curr = (((curr + num) % 100) + 100) % 100;
  }
}

console.log(count);
