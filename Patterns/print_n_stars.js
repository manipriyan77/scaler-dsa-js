// Given an integer N, print N stars in a single line.

let n = prompt("Enter a number to print number of stars");

for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}
