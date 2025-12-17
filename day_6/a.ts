const input = await Deno.readTextFile("./day_6/input.txt");
const lines = input.split("\r\n");

const numbers = [];
for (let i = 0; i < lines.length - 1; i++) {
  numbers.push(lines[i].trim().split(/\s+/));
}

const operators = lines.at(-1)?.trim().split(/\s+/);
let total = 0;

for (let i = 0; i < numbers[0].length; i++) {
  let str = "";
  for (let j = 0; j < numbers.length; j++) {
    str += numbers[j][i];
    if (j < numbers.length - 1) {
      str += operators![i];
    }
  }

  total += eval(str);
}

console.log(total);
