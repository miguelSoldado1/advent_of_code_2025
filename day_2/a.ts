const input = await Deno.readTextFile("./day_2/input.txt");
const ranges = input.split(",");

let count = 0;

for (const range of ranges) {
  const [start, end] = range.split("-").map(Number);
  for (let i = start; i <= end; i++) {
    const strNum = i.toString();
    const digitCount = strNum.length;
    if (digitCount % 2 !== 0) {
      continue;
    }

    const half = digitCount / 2;
    if (strNum.slice(0, half) === strNum.slice(half)) {
      count += i;
    }
  }
}

console.log(count);
