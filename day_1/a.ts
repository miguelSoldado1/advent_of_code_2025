const input = await Deno.readTextFile("./day_1/input.txt");
const lines = input.split("\r\n");

let curr = 50;
let count = 0;

for (const line of lines) {
  const dir = line[0];
  const num = parseInt(line.slice(1), 10);

  if (dir === "L") {
    curr = (curr - num) % 100;
  } else if (dir === "R") {
    curr = (((curr + num) % 100) + 100) % 100;
  }

  if (curr === 0) count++;
}

console.log(count);
