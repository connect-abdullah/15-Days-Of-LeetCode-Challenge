/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    let j = 0; // Pointer for the new array
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i]; // Place the non-val element at index j
            j++;
        }
    }
    
    return j; // j is the count of elements not equal to val
};

// Example usage:
let nums1 = [3, 2, 2, 3];
let val1 = 3;
console.log(removeElement(nums1, val1)); // Output: 2, nums = [2, 2, _, _]

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
console.log(removeElement(nums2, val2)); // Output: 5, nums = [0, 1, 4, 0, 3, _, _, _]
