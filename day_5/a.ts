const input = await Deno.readTextFile("./day_5/input.txt");
const lines = input.split("\r\n");

const ranges: number[][] = [];
const ingredients: number[] = [];

let total = 0;

for (const line of lines) {
  if (line.includes("-")) {
    ranges.push(line.split("-").map(Number));
  } else {
    ingredients.push(Number(line));
  }
}

outer: for (const ingredient of ingredients) {
  for (const range of ranges) {
    if (ingredient >= range[0] && ingredient <= range[1]) {
      total++;
      continue outer;
    }
  }
}

console.log(total);
