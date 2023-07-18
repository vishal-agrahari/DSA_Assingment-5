function convertTo2DArray(original, m, n) {
  const totalElements = m * n;
  
  if (original.length !== totalElements) {
    return [];
  }

  const result = [];
  for (let i = 0; i < m; i++) {
    const row = original.slice(i * n, (i + 1) * n);
    result.push(row);
  }

  return result;
}

// Test example
const originalArray = [1, 2, 3, 4, 5, 6]; // Example 1D array
const m = 2; // Number of rows
