const input = await Deno.readTextFile("./day_3/input.txt");
const lines = input.split("\r\n");

let total = 0;

for (const line of lines) {
  const nums = line.split("").map(Number);
  let voltage = 0;
  let firstDigit = -Infinity;
  let firstIndex = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > firstDigit) {
      firstDigit = nums[i];
      firstIndex = i;
    }
  }

  voltage = firstDigit * 10;

  const secondDigit = Math.max(...nums.slice(firstIndex + 1));
  voltage += secondDigit;
  total += voltage;
}

console.log(total);
