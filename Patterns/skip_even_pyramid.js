// Take an integer N as input, print the corresponding pattern for N.

// For example if N = 5 then pattern will be like:

// 1
// 1_
// 1_3
// 1_3_
// 1_3_5
// Note : Here '_' represents space for explanation purpose only. You have to print space in your code

let n = 4;
let m = 7;

const root = document.getElementById("root");

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i - 1 + 1; j++) {
    if (j % 2 != 0) {
      row += j;
    } else {
      row += "_";
    }
  }
  const p = document.createElement("p");
  p.textContent = row;
  root.appendChild(p);
}
