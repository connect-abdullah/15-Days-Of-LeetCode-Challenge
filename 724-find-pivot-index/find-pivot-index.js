/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        // Right sum is totalSum - leftSum - nums[i]
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i; // Found pivot index
        }
        leftSum += nums[i]; // Update left sum
    }

    return -1; // No pivot index found
};

// Example usage:
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // Output: 3
console.log(pivotIndex([1, 2, 3]));          // Output: -1
console.log(pivotIndex([2, 1, -1]));         // Output: 0
