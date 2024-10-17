function findMaxElement(arr) {
    let max = arr[0]; // Assume the first element is the maximum
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]; // Update max if current element is greater
      }
    }
  
    return max;
  }
  
  // Example usage:
  const array = [1, 3, 7, 2, 5, 9, 6];
  console.log(findMaxElement(array)); // Output: 9
  