function rotateArray(arr, k) {
    k = k % arr.length; // Handle cases where k is larger than the array length
  
    // Slice and concatenate
    const rotated = arr.slice(-k).concat(arr.slice(0, -k));
    
    return rotated;
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  console.log(rotateArray(array, k)); // Output: [5, 6, 7, 1, 2, 3, 4]
  