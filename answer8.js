function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return []; // If the length is odd, it cannot be a doubled array.
  }

  const numCounts = {};
  const original = [];

  // Count the occurrences of each element in the changed array.
  for (const num of changed) {
    numCounts[num] = (numCounts[num] || 0) + 1;
  }

  // Process each element's double value.
  for (const num of changed) {
    if (numCounts[num] === 0) {
      continue; // Skip elements that have already been used.
    }

    const doubleValue = num * 2;

    if (!numCounts[doubleValue] || numCounts[doubleValue] === 0) {
      return []; // If the double value doesn't exist or has been used up, not a doubled array.
    }

    original.push(num); // Add the current element to the original array.
    numCounts[num]--; // Reduce the count of the current element.
    numCounts[doubleValue]--; // Reduce the count of the double value.
  }

  return original;
}

// Test case
const changed = [1, 3, 4, 2, 6, 8];
const output = findOriginalArray(changed);
console.log(output); // Output: [1, 3, 4]
