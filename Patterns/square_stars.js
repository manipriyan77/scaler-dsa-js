// // Given two integers N and M as inputs, print a rectangle of N * M stars.

const n = 5;
const m = 8;
const root = document.getElementById("root");

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= m; j++) {
    // row += "*";
    row = row + "*";
  }
  const p = document.createElement("p");
  p.textContent = row;
  root.appendChild(p);
}
