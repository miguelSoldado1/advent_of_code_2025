const input = await Deno.readTextFile("./day_3/input.txt");
const lines = input.split("\r\n");

let total = 0;

for (const line of lines) {
  const nums = line.split("").map(Number);

  let power = 11;
  let index = -1;
  let voltage = 0;
  while (power >= 0) {
    let best = -1;
    let bestIdx = -1;
    const maxI = nums.length - (power + 1);
    for (let i = index + 1; i <= maxI; i++) {
      if (nums[i] > best) {
        best = nums[i];
        bestIdx = i;
        if (best === 9) break;
      }
    }
    voltage = voltage * 10 + best;
    index = bestIdx;
    power--;
  }

  total += voltage;
}

console.log(total);
