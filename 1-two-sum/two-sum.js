/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const map = new Map(); // To store the value and its index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Check if the complement exists in the map
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        // Store the current number with its index in the map
        map.set(nums[i], i);
    }

    return []; // Default return (should not reach here based on the constraints)
};