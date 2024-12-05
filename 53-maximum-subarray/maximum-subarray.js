/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    let currentSum = nums[0]; // Initialize with the first element
    let maxSum = nums[0];     // Initialize maxSum with the first element

    for (let i = 1; i < nums.length; i++) {
        // Decide whether to add nums[i] to the current subarray or start a new subarray
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // Update maxSum if the current subarray sum is larger
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};

// Example usage:
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArray([1]));                             // Output: 1
console.log(maxSubArray([5, 4, -1, 7, 8]));                // Output: 23
