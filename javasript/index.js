const character = "#";
const count = 8;
const rows = [];

const title = "character"
function padRow(name) {
  return character + name;
}
padRow("Steven")
const call = padRow("CamperChan");
console.log(call);


for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);