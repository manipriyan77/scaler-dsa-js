// Take an integer N as input, print the corresponding stair pattern for N.

// For example if N = 4 then stair pattern will be like:

// *
// **
// ***
// ****

let n = 5;
let m = 6;
const root = document.getElementById("root");

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i - 1 + 1; j++) {
    row = row + "*";
  }
  const p = document.createElement("p");
  p.textContent = row;
  root.appendChild(p);
}
