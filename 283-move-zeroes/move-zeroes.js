/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let slow = 0; // Pointer to track the position for non-zero elements

    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            // Swap the elements at slow and fast pointers
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++; // Move the slow pointer
        }
    }
}
