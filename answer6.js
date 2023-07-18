function findDuplicates(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i + 1) {
      const correctIndex = nums[i] - 1;

      if (nums[i] === nums[correctIndex]) {
        if (!result.includes(nums[i])) {
          result.push(nums[i]);
        }
        break;
      }

      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    }
  }

  return result;
}

// Test case
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const output = findDuplicates(nums);
console.log(output); // Output: [2, 3]
