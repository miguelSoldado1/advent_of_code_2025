const input = await Deno.readTextFile("./day_5/input.txt");
const lines = input.split("\r\n");

let ranges: number[][] = [];
for (const line of lines) {
  if (line.includes("-")) {
    ranges.push(line.split("-").map(Number));
  }
}

ranges = ranges.sort((a, b) => a[0] - b[0]);
for (let i = 0; i < ranges.length; i++) {
  if (ranges[i][1] >= ranges[i + 1]?.[0]) {
    ranges[i][1] = Math.max(ranges[i][1], ranges[i + 1][1]);
    ranges.splice(i + 1, 1);
    i--;
  }
}

console.log(ranges.reduce((acc, cur) => acc + (cur[1] - cur[0] + 1), 0));
