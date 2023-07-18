function findDistinctIntegers(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  // Find the distinct integers in nums1 that are not in nums2.
  const distinctNums1 = [...set1].filter((num) => !set2.has(num));

  // Find the distinct integers in nums2 that are not in nums1.
  const distinctNums2 = [...set2].filter((num) => !set1.has(num));

  return [distinctNums1, distinctNums2];
}

// Test case
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const output = findDistinctIntegers(nums1, nums2);
console.log(output); // Output: [[1, 3], [4, 6]]
