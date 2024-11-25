/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let uniqueIndex = 0; // Pointer for unique elements

    for (let i = 1; i < nums.length; i++) {
        // Check if the current element is different from the last unique element
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++; // Move the unique pointer forward
            nums[uniqueIndex] = nums[i]; // Update the array in-place
        }
    }

    // The number of unique elements is uniqueIndex + 1
    return uniqueIndex + 1;
}
