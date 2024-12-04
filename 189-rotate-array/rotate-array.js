/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    const n = nums.length;
    k %= n; // Reduce k to within array bounds

    // Create a rotated version
    const rotated = [...nums.slice(n - k), ...nums.slice(0, n - k)];

    // Copy back to original array
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
};

// Example usage:
let nums1 = [1, 2, 3, 4, 5, 6, 7];
rotate(nums1, 3);
console.log(nums1); // Output: [5, 6, 7, 1, 2, 3, 4]

let nums2 = [-1, -100, 3, 99];
rotate
