function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // If the middle element is greater than the rightmost element, the pivot point lies to the right.
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}

// Test case
const nums = [3, 4, 5, 1, 2];
const output = findMin(nums);
console.log(output); // Output: 1
