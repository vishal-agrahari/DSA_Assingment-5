function numberOfCompleteRows(n) {
  let k = 0; // Initialize the number of complete rows to 0.
  let sum = 0; // Initialize the sum of coins to 0.

  while (sum + (k + 1) <= n) {
    k++;
    sum += k;
  }

  return k;
}

// Test case
const n = 5;
const output = numberOfCompleteRows(n);
console.log(output); // Output: 2
