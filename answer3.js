function sortedSquares(nums) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  const result = new Array(n);

  // Fill the result array from right to left with squared values in non-decreasing order.
  for (let i = n - 1; i >= 0; i--) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare >= rightSquare) {
      result[i] = leftSquare;
      left++;
    } else {
      result[i] = rightSquare;
      right--;
    }
  }

  return result;
}

// Test case
const nums = [-4, -1, 0, 3, 10];
const output = sortedSquares(nums);
console.log(output); // Output: [0, 1, 9, 16, 100]
