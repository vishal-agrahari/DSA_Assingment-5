function distanceValue(arr1, arr2, d) {
  let distanceValue = 0;

  for (let i = 0; i < arr1.length; i++) {
    let isValid = true;

    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      distanceValue++;
    }
  }

  return distanceValue;
}

// Test case
const arr1 = [4, 5, 8];
const arr2 = [10, 9, 1, 8];
const d = 2;
const output = distanceValue(arr1, arr2, d);
console.log(output); // Output: 2
