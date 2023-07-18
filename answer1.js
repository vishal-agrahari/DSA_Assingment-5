function convertTo2DArray(original, m, n) {
  if (original.length !== m * n) {
    return []; // Return an empty 2D array if it's impossible to form m x n array.
  }

  // Initialize an empty 2D array with m rows and n columns.
  const result = Array.from({ length: m }, () => Array(n));

  // Fill in the elements from the original array into the 2D array row-wise.
  for (let i = 0; i < m; i++) {
    result[i] = original.slice(i * n, (i + 1) * n);
  }

  return result;
}

// Test case
const original = [1, 2, 3, 4];
const m = 2;
const n = 2;
const output = convertTo2DArray(original, m, n);
console.log(output); // Output: [[1, 2], [3, 4]]
