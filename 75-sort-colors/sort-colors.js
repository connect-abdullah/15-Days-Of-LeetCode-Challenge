/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
    let low = 0, mid = 0, high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap nums[low] and nums[mid]
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++; // Move forward
        } else if (nums[mid] === 2) {
            // Swap nums[mid] and nums[high]
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};

// Example usage:
let nums1 = [2, 0, 2, 1, 1, 0];
sortColors(nums1);
console.log(nums1); // Output: [0, 0, 1, 1, 2, 2]

let nums2 = [2, 0, 1];
sortColors(nums2);
console.log(nums2); // Output: [0, 1, 2]
