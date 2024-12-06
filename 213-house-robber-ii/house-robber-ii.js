/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    const robLinear = (houses) => {
        let prev2 = 0, prev1 = 0;
        for (let money of houses) {
            const temp = prev1;
            prev1 = Math.max(prev1, prev2 + money);
            prev2 = temp;
        }
        return prev1;
    };

    const n = nums.length;
    if (n === 1) return nums[0];
    if (n === 2) return Math.max(nums[0], nums[1]);

    // Compare the maximum of the two scenarios
    return Math.max(robLinear(nums.slice(0, n - 1)), robLinear(nums.slice(1)));
};

// Example usage:
console.log(rob([2, 3, 2])); // Output: 3
console.log(rob([1, 2, 3, 1])); // Output: 4
console.log(rob([1, 2, 3])); // Output: 3
